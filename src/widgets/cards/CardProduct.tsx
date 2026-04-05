"use client";

import { useEffect, useState } from "react";
import Card from "@/src/entities/product";
import {
  addToOrder,
  BuyProduct,
  addOpinions,
} from "@/src/features/add-to-order/model/store";
import Button from "@/src/shared/ui/btn";
import { getJsonData } from "@/src/features/getJson/getJsonLogic";
import Image from "next/image";
import Heading from "@/src/shared/ui/title";
import { Products } from "@/src/features/interfaces/productInterface";

function CardBody() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getJsonData<Products[]>();
      if (data) {
        setProducts(data);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
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
          title={<Heading text={product.title} level={1} />}
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
    </section>
  );
}

export default CardBody;
