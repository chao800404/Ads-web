/** @format */

import View from "../veiw";
const webCreativeImg = require("../../../img/webCreative/creativeDemo.svg");

class WebCreativeView extends View {
  _parentElement = document.querySelector(".demos");

  _generateMarkup() {
    const { title } = this._data;
    console.log(this._data);
    return `
       <div class="template_demo webCreativeDemo">
        <div class="template_demo-container webCreativeDemo_container">
            ${webCreativeImg}
        </div>
        
        <h1 class="heading-1--1 webCreativeDemo-title">
            ${title}
        </h1>
       </div>
    `;
  }
}

export default new WebCreativeView();
