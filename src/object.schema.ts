import { z } from "zod";

const User = z.object({
  username: z.string(),
  email: z.string().email().optional(),
});

User.parse({ username: "Ludwig", email: "aungkoko@gmail.com" });

// extract the inferred type
type User = z.infer<typeof User>;
// { username: string, email?: string | undefined }
