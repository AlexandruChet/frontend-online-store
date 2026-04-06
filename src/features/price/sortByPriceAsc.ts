import { Products } from "../interfaces/productInterface";

export const sortProductsByPriceAsc = (product: Products[]): Products[] => {
  return [...product].sort((a, b) => a.price - b.price);
};
