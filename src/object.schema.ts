import { z } from "zod";

const User = z.object({
  username: z.string(),
  email: z.string().email().optional(),
  createdAt: z.date().readonly(),
});

User.parse({
  username: "Ludwig",
  email: "aungkoko@gmail.com",
  createdAt: new Date(),
});

// extract the inferred type
type User = z.infer<typeof User>;
// { username: string, email?: string | undefined, createdAt: Date }

// Use .shape to access the schemas for a particular key.
const usernameSchema = User.shape.username.optional();
usernameSchema.parse("Akk");

// To only keep certain keys, use .pick
const onlyUsernameSchema = User.pick({ username: true });
type OnlyUsernameType = z.infer<typeof onlyUsernameSchema>;

// To remove certain keys, use .omit
const WithoutUsernameSchema = User.omit({ username: true });
type WithoutUsernameType = z.infer<typeof WithoutUsernameSchema>;

// Just like built-in TypeScript utility type Partial, the .partial method makes all properties optional.
const AllOptionalSchema = User.partial();
type AllOptionalType = z.infer<typeof AllOptionalSchema>;

// We can also specify which properties to make optional
const UsernamePartialSchema = User.partial({ username: true });
type UsernamePartialType = z.infer<typeof UsernamePartialSchema>;

// The .partial method is shallow — it only applies one level deep. There is also a "deep" version:
const user = z.object({
  username: z.string(),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  strings: z.array(z.object({ value: z.string() })),
});

const deepPartialUser = user.deepPartial();

/*
{
  username?: string | undefined,
  location?: {
    latitude?: number | undefined;
    longitude?: number | undefined;
  } | undefined,
  strings?: { value?: string}[]
}
*/

// Learn other remaining utility methods on official docs.
