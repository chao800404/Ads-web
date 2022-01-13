/** @format */

import View from "../veiw";

class WebDemo extends View {
  _parentElement = document.querySelector(".demos");

  _generateMarkup() {
    const { title, svgUrl } = this._data;
    return `
      <div class="template_demo webDesign">
        <div class="template_demo-container webDesign_image webDesignDemo_an">
          <lottie-player class="webDesign-svg" src="${svgUrl}"  background="transparent"  speed="1"></lottie-player>
        </div>
        
        <div class="webDesign_radar-img radar-img_an">
          <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_ofocdzqf.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>
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
