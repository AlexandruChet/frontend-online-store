import { ReactNode } from "react";
import { calcPrice } from "@/src/features/price/priceLogic";
import "./cards.scss";

interface CardValues {
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
}: CardValues) {
  const endPrice = calcPrice(price, discountValue);

  return (
    <article className="card">
      <div className="product">
        <div className="product_img">{img}</div>
        <div className="product_info">
          <header>
            {title}
            <p className="description">{description}</p>
          </header>
          <div className="price_block">
            {discountValue ? (
              <>
                <span className="old-price">Initial: {price}$</span>
                <strong className="new-price"> Now: {endPrice}$</strong>
              </>
            ) : (
              <span className="price">{price}$</span>
            )}
          </div>
        </div>
        <footer className="product_logic">
          {addToOrderBtn}
          {buyBtn}
          {feedbackBtn}
        </footer>
      </div>
    </article>
  );
}

export default Card;
