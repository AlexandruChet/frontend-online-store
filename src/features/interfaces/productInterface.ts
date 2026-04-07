type Catalog = "phone" | "laptop" | "watch" | "audio" | "tablet" | "accessories";

export interface Products {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  discount?: number;
  catalog: Catalog;
}
