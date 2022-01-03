/** @format */

import View from "../veiw";
const demo = require("../../../img/demo/ADS EMAMINER.svg");

class HomeDemo extends View {
  _parentElement = document.querySelector(".demos");

  _generateMarkup() {
    return `
    <div class="demo">
          <div class="demo__text">
            <h1 class="heading-1">${this._data.title} <span>${this._data.ch_title}</span></h1>
            <p>${this._data.text}</p>
          </div>
          <button class="btn demo__btn get__start"><a href="#">Get Started</a></button>
          <div class="demo__svg demo__an" viewBox="0 0 727 847" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            ${demo}
            </div>
        </div> 
    `;
  }

  addHandlerStart(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".get__start");
      if (!btn) return;
      handler();
    });
  }

  addScrollView() {
    const form = document.querySelector(".process");
    form.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}

export default new HomeDemo();
