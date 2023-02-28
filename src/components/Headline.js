import { Component } from "../core/Core";

export default class Headline extends Component {
  render() {
    this.el.classList.add("headline");
    this.el.innerHTML = /*html */ `
        <h1>
            <span>Search</span><br />
            for it! <br /> 
            What you want.
        </h1>
        <p>
        As a movie search site using OMDbAPI
        You can search for information about the movie you want through search.
        </p>
        `;
  }
}
