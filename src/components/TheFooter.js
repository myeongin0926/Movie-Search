import { Component } from "../core/Core";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = /*html*/ `
    <div>
        <a href="https://github.com/myeongin0926/Movie-Search">
            GitHub Repository
            </a>
    </div>
    <div>
        <a href="https://github.com/myeongin0926">
            ${new Date().getFullYear()}
            Myeongin
        </a>
    </div>`;
  }
}
