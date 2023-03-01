import { throttle } from "lodash";
import { Component } from "../core/Core";

export default class GoTop extends Component {
  render() {
    this.el.classList.add("go-top", "hide");
    this.el.innerHTML = /*html*/ `
    <span class="material-symbols-outlined">vertical_align_top</span>
    `;
    const topEl = this.el;
    topEl.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

 
    window.addEventListener("scroll", throttle(() => {
        if (window.scrollY < 400) {
          topEl.classList.add("hide");
        } else {
          topEl.classList.remove("hide");
        }
      },300))
  
    }