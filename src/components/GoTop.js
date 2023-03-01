import { Component } from "../core/Core";

export default class GoTop extends Component {
  render() {
    this.el.classList.add("go-top");
    this.el.innerHTML = /*html*/ `
    <span class="material-symbols-outlined">vertical_align_top</span>
    `;
    this.el.addEventListener("click", () => {
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    });
  }
}
