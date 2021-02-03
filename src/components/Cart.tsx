import React, { Component } from "react";
import { AppStateContext } from "./AppState";
import { FiShoppingCart } from "react-icons/fi";
import CartCSS from "./Cart.module.css";

interface Props {}

interface State {
  isOpen: boolean;
}

export default class Cart extends Component<Props, State> {
  state = {
    isOpen: false,
  };

  //e.target => The element on which the event occurs
  //e.currentTarget => The element where the event hanler is attached to
  // So below 'currentTarget' is always the Button element
  // but the 'target' can be either the Shopping Cart <svg> or the <span>
  toggleCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.currentTarget as HTMLSpanElement) {
      console.log((e.currentTarget as HTMLSpanElement).innerHTML);
    }
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
      return (
        <AppStateContext.Consumer>
        {(state) => {
            const totalItems = state.cart.items.reduce((sum, item) => {
                return sum + item.quantity;
            }, 0)
          return (
            <div>
              <button
                className={CartCSS.button}
                type="button"
                onClick={this.toggleCart}
              >
                <FiShoppingCart />
                <span>{totalItems} pizza(s)</span>
              </button>
              <div
                className={CartCSS.cartDropDown}
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul>
                  {state.cart.items.map((item) => {
                    return <li key={item.id}>{item.name} X {item.quantity}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
      );
  }
}
