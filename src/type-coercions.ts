import { z } from "zod";

const stringSchema = z.coerce.string(); // => ZodString instance
console.log(typeof stringSchema.parse(13)); // => "13"
console.log(typeof stringSchema.parse(true)); // => "true"

const dateSchema = z.coerce.date();
console.log(dateSchema.parse("Wed, 24 Jan 2024 06:24:18 GMT")); // Date object
console.log(dateSchema.parse(Date.now()).getMonth()); // => current month represent in number type
