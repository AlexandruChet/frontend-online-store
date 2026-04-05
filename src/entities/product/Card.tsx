import { ReactNode } from "react";
import { calcPrice } from "@/src/features/price/priceLogic";

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
    <div className="card">
      <div className="product">
        <div className="product_img">{img}</div>
        <div className="product_info">
          <article>
            {title}
            <p className="description">{description}</p>
          </article>
          <article>
            {discountValue ? (
              <>
                <p className="old-price old-price-styles">
                  Starting price {price} $
                </p>
                <p className="new-price">Final price {endPrice} $</p>
              </>
            ) : (
              <p className="price">{price} $</p>
            )}
          </article>
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
