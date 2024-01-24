import { z } from "zod";

// Literal schemas represent a literal type, like "hello world" or 5.
// There is no support for Date literal
const tuna = z.literal("tuna");
const twelve = z.literal(12);
const twobig = z.literal(2n); // bigint literal
const tru = z.literal(true);

const terrificSymbol = Symbol("terrific");
const terrific = z.literal(terrificSymbol);

// retrieve literal value
tuna.value; // "tuna"

tuna.parse("aungkoko"); // will throw error, it expects "tuna" literal
