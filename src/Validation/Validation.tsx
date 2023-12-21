import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { Animals } from "../LocalStorage/LocalStorage";

export const AnimalMap = z.array(
  z.object({
    id: z.string().or(z.number()),
    name: z.string().min(3, "Min length must be 3 characters").max(42),
    image: z
      .string()
      .endsWith(".jpg", "Must end with .jpg")
      .url()
      .default(
        "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cat-default-avatar-image_2246581.jpg",
      ),
  }),
);

const results = AnimalMap.safeParse(Animals);

if (!results.success) {
  console.log(fromZodError(results.error));
}
