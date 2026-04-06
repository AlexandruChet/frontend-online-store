"use client";

import { useEffect, useState } from "react";
import Card from "@/src/entities/product";
import {
  addToOrder,
  BuyProduct,
  addOpinions,
} from "@/src/features/add-to-order/store";
import Button from "@/src/shared/ui/btn";
import Image from "next/image";
import Heading from "@/src/shared/ui/title";
import { Products } from "@/src/features/interfaces/productInterface";
import { getJsonData } from "@/src/features/getJson/getJsonLogic";
import { sortProductsByPriceAsc } from "@/src/features/price/sortByPriceAsc";

function CardBody() {
  const [products, setProducts] = useState<Products[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getJsonData<Products[]>();
        if (data) setProducts(data);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  const handleSort = () => {
    const sorted = sortProductsByPriceAsc(products);
    setProducts(sorted);
  };

  if (isFetching) return <Heading text="Loading products..." level={1} />;
  if (products.length === 0) return <Heading text="No products found" level={1} />;

  return (
    <section className="products-cards-section">
      <div className="sort-cards-logic">
        <Button
          onClick={handleSort}
          variant="feedback_logic"
          text="Sort from a lower price to a higher price"
        />
      </div>
      <div className="cards-block">
        {products.map((product) => (
          <Card
            key={product.id}
            img={
              <Image
                src={product.img}
                alt={product.title}
                width={150}
                height={150}
              />
            }
            id={product.id}
            title={<Heading text={product.title} level={2} />}
            description={product.description}
            price={product.price}
            discountValue={product.discount}
            addToOrderBtn={
              <Button onClick={addToOrder} variant="add_to_order" text="Add" />
            }
            buyBtn={
              <Button onClick={BuyProduct} variant="buy_logic" text="Buy" />
            }
            feedbackBtn={
              <Button
                onClick={addOpinions}
                variant="feedback_logic"
                text="Feedback"
              />
            }
          />
        ))}
      </div>
    </section>
  );
}

export default CardBody;
