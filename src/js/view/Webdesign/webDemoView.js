/** @format */

import View from "../veiw";
const webdesingDemoSvg = require("../../../img/webdesign/demo/webdesignDemo.svg");
const radar1 = require("../../../img/webdesign/demo/radars1.svg");
const demoBg = require("../../../img/webdesign/demo/Vector.svg");

class WebDemo extends View {
  _parentElement = document.querySelector(".demos");

  _generateMarkup() {
    const { title } = this._data;
    return `
       <div class="template_demo webDesign">
        <div class="template_demo-container webDesign_image webDesignDemo_an">
        <lottie-player class="webDesign-svg" src="https://assets3.lottiefiles.com/packages/lf20_czeYL8.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>
        <div class="template_demo-bg">
        ${demoBg}
        </div>
        </div>
        <div class="webDesign_radar-img radar-img_an">
            ${radar1}
        </div>
        <h1 class="heading-1--1 webDesign_title">
            <span>${this._organizeText(title, 0, 1)}</span>
            <span>${this._organizeText(title, 1, 2)}</span>
        </h1>
       </div>
    `;
  }
}

export default new WebDemo();
