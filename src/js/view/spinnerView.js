/** @format */
import { Canvas } from "../helpers";

class SpinnerView {
  _parentElement = document.querySelector(".spinner");
  _firstLogin = false;

  generateMarkupSpinner() {
    const canvas = this._parentElement.querySelector(".spinner__an");
    new Canvas(
      canvas,
      "https://assets6.lottiefiles.com/packages/lf20_ypej3gd9.json"
    ).draw();
  }

  removeMarkupSpinner() {
    setTimeout(() => (this._parentElement.style = "display:none"), 1000);
  }

  addMarkupSpinner() {
    this._parentElement.style = "display:flex";
  }
}

export default new SpinnerView();
