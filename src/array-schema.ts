import { z } from "zod";

const numArrSchema = z.array(z.number()); // z.number().array()
numArrSchema.parse([12]); // passes

z.string().optional().array(); // (string | undefined)[]
z.string().array().optional(); // string[] | undefined

// Use .element to access the schema for an element of the array.
console.log(numArrSchema.element); // ZodNumber

// If you want to ensure that an array contains at least one element, use .nonempty().
const nonEmptyArrSchema = z
  .string()
  .array()
  .nonempty({ message: "Can't be empty!" });
// the inferred type is now
// [string, ...string[]]
type NonEmptyArrType = z.infer<typeof nonEmptyArrSchema>;

nonEmptyArrSchema.parse([]); // fails
nonEmptyArrSchema.parse([12]); // fails
nonEmptyArrSchema.parse(["akk"]); // passes

const min5Arr = z.string().array().min(5); // must contain 5 or more items
z.string().array().max(5); // must contain 5 or fewer items
z.string().array().length(5); // must contain 5 items exactly
// Unlike .nonempty() these methods do not change the inferred type.
type ArrType = z.infer<typeof min5Arr>;
