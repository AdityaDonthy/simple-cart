import React from "react";
import SpecialOfferCSS from "./SpecialOffer.module.css";
import { Pizza } from "./../types";
import { AddToCartProps, WithAddToCartProps } from "./AddToCart";

interface Props extends AddToCartProps {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  return (
    <div className={SpecialOfferCSS.container}>
      <ul>
        <li key={pizza.id}>
          <h2>{pizza.name}</h2>
          <p>{pizza.description}</p>
          <p>{pizza.price}</p>
          <WithAddToCartProps>
            {({ addToCart }) => {
              return (
                <button
                  onClick={() => addToCart({
                    id: pizza.id,
                    name: pizza.name,
                    price: pizza.price,
                  })}
                >
                  Add to Cart
                </button>
              );
            }}
          </WithAddToCartProps>
        </li>
      </ul>
    </div>
  );
};

export default SpecialOffer;
