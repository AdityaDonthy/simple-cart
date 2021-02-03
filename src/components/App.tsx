import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import AppCSS from "./App.module.css";
import PizzaSVG from "./../svg/pizza.svg";
import Cart from "./Cart";
import AppStateProvider from "./AppState";

const App = () => {
  console.log(pizzas);
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <Cart />
        </div>
        <ul>
          {pizzas.map((p) => {
            return <Pizza pizza={p} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
