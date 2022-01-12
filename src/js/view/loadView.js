/** @format */

class LoadView {
  _parentElement = document.querySelector(".loading");
  _isFinshAn = false;

  generateMarkupLoad() {
    const canvas = this._parentElement.querySelector(".loading__an");
    const ctx = canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    lottie.loadAnimation({
      renderer: "canvas",
      autoplay: true,
      loop: false,
      path: "https://assets2.lottiefiles.com/packages/lf20_5tsw9x6j.json",
      rendererSettings: {
        context: ctx,
      },
    });
  }

  generateMarkupMouseAn() {
    const mouseAn = this._parentElement.querySelector(".loading__mouse__an");
    setTimeout(() => {
      mouseAn.classList.add("loading__mouse__an--active");
    }, 2000);
  }

  scollMoveToHeaderlogo(scrolltoTop, isFinish) {
    const body = document.querySelector("body");
    const bodyBounding = body.getBoundingClientRect().y;
    const abs = Math.abs(bodyBounding);
    if (!this._isFinshAn) {
      if (abs > 2) {
        this._parentElement.style =
          "transform:scaleX(0);opacity:0; visibility:hidden";
        scrolltoTop("auto");
        this._isFinshAn = true;
        this._parentElement.addEventListener(
          "transitionend",
          () => (this._parentElement.style = "display:none")
        );
      }
    }
  }
}

export default new LoadView();
