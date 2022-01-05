/** @format */

import View from "../veiw";

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
          <div class="demo__svg demo__an">
              <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_ujvyzbbd.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>
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
    });
  }
}

export default new HomeDemo();
