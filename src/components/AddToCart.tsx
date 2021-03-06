import React from "react";
import { useStateDispatch, CartItem } from "./AppState";

export interface AddToCartProps {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
}

export function withAddToCart<OriginalProps extends AddToCartProps>(
  ChildComponent: React.ComponentType<OriginalProps>
) {
  const AddToCartHoc = (props: Omit<OriginalProps, keyof AddToCartProps>) => {
    const dispatch = useStateDispatch();
    const handleAddToCartClicked = (item: CartItem) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          item,
        },
      });
    };
    return (
      <ChildComponent
        {...(props as OriginalProps)}
        addToCart={handleAddToCartClicked}
      />
    );
  };

  return AddToCartHoc;
}

export const WithAddToCartProps: React.FC<{
    children: (props: AddToCartProps) => JSX.Element;
  }> = ({ children }) => {
    const dispatch = useStateDispatch();
    const addToCart: AddToCartProps['addToCart'] = (item) => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          item,
        },
      });
    };
    return children({ addToCart });
  };

  export const useAddToCart = () => {
    const dispatch = useStateDispatch();
    const addToCart: AddToCartProps['addToCart'] = (item) => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          item,
        },
      });
    };
    return addToCart;
  }