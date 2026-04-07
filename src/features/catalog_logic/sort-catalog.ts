import { Products } from "../interfaces/productInterface";

export function sortByCatalog(items: Products[], sortCatalogValue: string): Products[] {
  return items.filter(item => item.catalog === sortCatalogValue);
}
