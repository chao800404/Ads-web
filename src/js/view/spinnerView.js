/** @format */

class SpinnerView {
  _parentElement = document.querySelector(".spinner");
  _firstLogin = false;

  generateMarkupSpinner() {
    const canvas = this._parentElement.querySelector(".spinner__an");
    const ctx = canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    lottie.loadAnimation({
      renderer: "canvas",
      autoplay: true,
      loop: true,
      path: "https://assets6.lottiefiles.com/packages/lf20_ypej3gd9.json",
      rendererSettings: {
        context: ctx,
      },
    });
  }

  removeMarkupSpinner() {
    this._parentElement.style = "display:none";
  }

  addMarkupSpinner() {
    this._parentElement.style = "display:flex";
  }
}

export default new SpinnerView();
