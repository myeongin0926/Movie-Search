import { Component } from "../core/core";
import TextField from "../components/TextField";
import Message from "../components/Message";

export default class Home extends Component {
  render() {
    this.el.innerHTML = /*HTML */ `
        <h1>Home Page!</h1>`;

    this.el.append(new TextField().el, new Message().el);
  }
}