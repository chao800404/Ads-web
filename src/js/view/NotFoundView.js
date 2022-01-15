/** @format */

import View from "./veiw";
import { Canvas } from "../helpers";

class NotFoundView extends View {
  _parentElement = document.querySelector(".demos");

  _generateMarkup() {
    return `
        <div class="notFound">
            <canvas class="notFound__an"> </canvas>
            <button class="notFound__btn btn--2">Go Home</button>
        </div>
        `;
  }

  generateMarkupCanvas() {
    const canvas = this._parentElement.querySelector(".notFound__an");
    new Canvas(
      canvas,
      "https://assets3.lottiefiles.com/packages/lf20_nucheY.json"
    ).draw();
  }
}

export default new NotFoundView();
