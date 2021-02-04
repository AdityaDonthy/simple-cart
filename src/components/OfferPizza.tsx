import React, { useContext } from "react";
import SpecialOfferCSS from "./SpecialOffer.module.css";
import {Pizza} from './../types';
import { AddToCartProps, withAddToCart } from "./AddToCart";

interface Props extends AddToCartProps{
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClicked = () => {
    addToCart({id: pizza.id, name: pizza.name, price: pizza.price})
  };
  return (
    <div className={SpecialOfferCSS.container}>
      <ul>
        <li key={pizza.id}>
          <h2>{pizza.name}</h2>
          <p>{pizza.description}</p>
          <p>{pizza.price}</p>
          <button onClick={handleAddToCartClicked}>Add to Cart</button>
        </li>
      </ul>
    </div>
  );
};

export default withAddToCart(SpecialOffer);