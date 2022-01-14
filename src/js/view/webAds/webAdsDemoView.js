/** @format */
import _ from "lodash";
import View from "../veiw";
import webAdsImg from "../../../img/webads/demo/webAdsDemo.webp";

class WebAdsDemoView extends View {
  _parentElement = document.querySelector(".demos");

  _generateMarkup() {
    const { title, text } = this._data;
    console.log(this._data);
    return `
       <div class="template_demo  webAdsDemo">
        <div class="template_demo-container webAdsDemo_container">
            <img class="webAdsDemo-img" src="${webAdsImg}">
        </div>
        
        <h1 class="heading-1--1 webAdsDemo-title">
            <span>${title}</span>
            <span>${text}</span>
        </h1>
       </div>
    `;
  }
}

export default new WebAdsDemoView();
