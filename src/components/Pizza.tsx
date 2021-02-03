import React, { useContext } from "react";
import PizzaCSS from "./Pizza.module.css";
import { useStateDispatch } from "./AppState";
interface Pizza {
  id: number;
  description: string;
  name: string;
  price: number;
}

interface Props {
  pizza: Pizza;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
  const dispatch = useStateDispatch();
  const handleAddToCartClicked = () => {
    dispatch({
        type: 'ADD_TO_CART',
        payload: {
            item: {id: pizza.id, name: pizza.name, price: pizza.price}
        }
    })
  };
  return (
    <div className={PizzaCSS.container}>
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

export default Pizza;
