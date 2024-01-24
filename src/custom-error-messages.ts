import { z } from "zod";

const name = z.string({
  required_error: "Name is required",
  invalid_type_error: "Name must be a string",
});

// name.parse(12); // will throw ZodError, telling you to pass string with provided custom "invalid_type_error" message

// When using validation methods, you can pass in an additional argument to provide a custom error message.
z.string().min(5, { message: "Must be 5 or more characters long" });
z.string().max(5, { message: "Must be 5 or fewer characters long" });
z.string().length(5, { message: "Must be exactly 5 characters long" });
z.string().email({ message: "Invalid email address" });
z.string().url({ message: "Invalid url" });
z.string().emoji({ message: "Contains non-emoji characters" });
z.string().uuid({ message: "Invalid UUID" });
z.string().includes("tuna", { message: "Must include tuna" });
z.string().startsWith("https://", { message: "Must provide secure URL" });
z.string().endsWith(".com", { message: "Only .com domains allowed" });
z.string().datetime({ message: "Invalid datetime string! Must be UTC." });
z.string().ip({ message: "Invalid IP address" });

const strSchema = z
  .string({ invalid_type_error: "Must be string" })
  .min(5, { message: "Must be 5 or more characters long" });
strSchema.parse(12); // will throw ZodError "Must be string"
strSchema.parse("akk"); // will throw ZodError "Must be 5 or more characters long"
