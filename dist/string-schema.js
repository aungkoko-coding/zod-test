"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// creating a schema for strings
const mySchema = zod_1.z.string();
// parsing
try {
    console.log(mySchema.parse("tuna")); // => "tuna"
    mySchema.parse(12); // => throws ZodError
}
catch (err) {
    if (err instanceof zod_1.ZodError) {
        console.log(err.errors);
    }
}
// "safe" parsing (doesn't throw error if validation fails)
try {
    console.log(mySchema.safeParse("tuna")); // => { success: true; data: "tuna" }
    const validationErrorRes = mySchema.safeParse(12); // => { success: false; error: ZodError }
    console.log(validationErrorRes);
}
catch (err) {
    if (err instanceof zod_1.ZodError) {
        console.log(err.errors);
    }
}
