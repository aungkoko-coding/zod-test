import { z } from "zod";

const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
type FishEnum = z.infer<typeof FishEnum>;
// 'Salmon' | 'Tuna' | 'Trout'

FishEnum.parse("Akk");

const fish = ["Salmon", "Tuna", "Trout"] as const;
const FishEnum2 = z.enum(fish);

// To get autocompletion with a Zod enum, use the .enum property of your schema:
FishEnum.enum.Salmon; // => autocompletes

FishEnum.enum;
/*
=> {
  Salmon: "Salmon",
  Tuna: "Tuna",
  Trout: "Trout",
}
*/

// You can also retrieve the list of options as a tuple with the .options property:
FishEnum.options; // ["Salmon", "Tuna", "Trout"]
