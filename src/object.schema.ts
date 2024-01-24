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
