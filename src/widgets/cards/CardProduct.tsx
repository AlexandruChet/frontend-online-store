"use client";
import Card from "@/src/entities/product";
import { addToOrder } from "@/src/features/add-to-order/model/store";
import { BuyProduct } from "@/src/features/add-to-order/model/store";
import { addOpinions } from "@/src/features/add-to-order/model/store";
import Button from "@/src/shared/ui/btn";
import Image from "next/image";
import Logo from "../../../public/shop_logo.svg";

function CardBody() {
  return (
    <section>
      <Card
        img={<Image src={Logo} alt="Logo" width={50} height={50} />}
        id={1}
        title={<h3>Product Name</h3>}
        description="Description for Product"
        price={1000}
        addToOrderBtn={
          <Button onClick={addToOrder} variant="add_to_order" text="Add" />
        }
        buyBtn={<Button onClick={BuyProduct} variant="buy_logic" text="Buy" />}
        feedbackBtn={
          <Button
            onClick={addOpinions}
            variant="feedback_logic"
            text="Feedback"
          />
        }
      />
    </section>
  );
}

export default CardBody;
