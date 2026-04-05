import { ReactNode } from "react";
import { calcPrice } from "@/src/features/price/priceLogic";

interface CardProps {
  id: number;
  img: ReactNode;
  title: ReactNode;
  description: string;
  price: number;
  discountValue?: number;
  addToOrderBtn: ReactNode;
  buyBtn?: ReactNode;
  feedbackBtn?: ReactNode;
}

function Card({
  img,
  title,
  description,
  price,
  discountValue,
  addToOrderBtn,
  buyBtn,
  feedbackBtn,
}: CardProps) {
  const endPrice = calcPrice(price, discountValue);

  return (
    <div className="card">
      <div className="product">
        <div className="product_img">{img}</div>
        <div className="product_info">
          {title}
          <p className="description">{description}</p>
          <p className="price">{endPrice} $ </p>
        </div>

        <div className="product_logic">
          {addToOrderBtn}
          {buyBtn}
          {feedbackBtn}
        </div>
      </div>
    </div>
  );
}

export default Card;
