import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from './Pizza'

const App = () => {
  console.log(pizzas);
  return <ul>
      {
          pizzas.map( p => {
              return <Pizza pizza= {p} />
          })
      }
  </ul>;
};

export default App;
