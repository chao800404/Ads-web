/** @format */

import View from "../veiw";
const webdesingDemoSvg = require("../../../img/webdesign/demo/webdesignDemo.svg");
const radar = require("../../../img/webdesign/demo/radars.svg");

const radar1 = require("../../../img/webdesign/demo/radars1.svg");

class WebDemo extends View {
  _parentElement = document.querySelector(".demos");

  _generateMarkup() {
    const { title } = this._data;
    return `
       <div class="template_demo webDesign">
        <div class="template_demo-container webDesign_image webDesignDemo_an">
            ${webdesingDemoSvg}
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
