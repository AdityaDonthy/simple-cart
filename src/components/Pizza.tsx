import React, { useContext } from "react";
import PizzaCSS from "./Pizza.module.css";
import {Pizza} from './../types';
import { AddToCartProps, useAddToCart } from "./AddToCart";

interface Props extends AddToCartProps{
  pizza: Pizza;
}

const PizzaItem: React.FC<Props> = ({ pizza }) => {
    const addToCart = useAddToCart();
    const handleAddToCartClicked = () => {
        addToCart({id: pizza.id, name: pizza.name, price: pizza.price})
    }

  return (
    <div className={PizzaCSS.container}>
      <ul>
        <li key={pizza.id}>
          <h2>{pizza.name}</h2>
          <p>{pizza.description}</p>
          <p>{pizza.price}</p>
          <button type="button" onClick={handleAddToCartClicked}>Add to Cart</button>
        </li>
      </ul>
    </div>
  );
};

export default PizzaItem;
