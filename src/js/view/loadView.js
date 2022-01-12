/** @format */

import { Canvas } from "../helpers";

class LoadView {
  _parentElement = document.querySelector(".loading");
  _isFinshAn = false;
  _mouseAn = document.querySelector(".loading__mouse__an");
  _anEnd = false;

  generateMarkupLoad() {
    const canvas = this._parentElement.querySelector(".loading__an");
    new Canvas(
      canvas,
      "https://assets2.lottiefiles.com/packages/lf20_5tsw9x6j.json",
      false
    ).draw();
    // const ctx = canvas.getContext("2d");
    // ctx.canvas.width = window.innerWidth;
    // ctx.canvas.height = window.innerHeight;

    // lottie.loadAnimation({
    //   renderer: "canvas",
    //   autoplay: true,
    //   loop: false,
    //   path: "https://assets2.lottiefiles.com/packages/lf20_5tsw9x6j.json",
    //   rendererSettings: {
    //     context: ctx,
    //   },
    // });
  }

  generateMarkupMouseAn() {
    setTimeout(() => {
      this._mouseAn.classList.add("loading__mouse__an--active");
    }, 2000);
  }

  scollMoveToHeaderlogo(scrolltoTop) {
    const body = document.querySelector("body");
    const bodyBounding = body.getBoundingClientRect().y;
    const abs = Math.abs(bodyBounding);

    if (abs > 2 && !this._isFinshAn && this._anEnd) {
      this._parentElement.style =
        "transform:scaleX(0);opacity:0; visibility:hidden";
      this._isFinshAn = true;
      this._parentElement.addEventListener("transitionend", () => {
        this._parentElement.style = "display:none";
      });
      setTimeout(() => {
        scrolltoTop("auto");
      }, 200);
    }
  }

  mouseAnFinish() {
    this._mouseAn.addEventListener("transitionend", () => (this._anEnd = true));
  }
}

export default new LoadView();
