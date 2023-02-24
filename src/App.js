// export default class App {
//   constructor() {
//     this.el = document.createElement("div");
//     this.el.textContent = "Hello, World!";
//   }
// }

import { Component } from "./core/Core";
import FruitItem from "./components/FruitItem";

export default class App extends Component {
  constructor() {
    super({
      state: {
        fruits: [
          { name: "apple", price: 1000 },
          { name: "banana", price: 2000 },
          { name: "cherry", price: 3000 },
        ],
      },
    });
  }
  render() {
    console.log(this.state.fruits);
    this.el.innerHTML = /*HTML*/ `
    <h1>Fruits</h1>
    <ul>
    </ul>
    
    `;
    const ulEl = this.el.querySelector("ul");
    ulEl.append(
      ...this.state.fruits.map(
        (fruit) =>
          new FruitItem({
            props: {
              name: fruit.name,
              price: fruit.price,
            },
          }).el
      )
    );
  }
}
