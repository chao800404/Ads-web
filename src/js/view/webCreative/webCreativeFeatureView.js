/** @format */

import View from "../veiw";
import h5Creative from "../../../img/webCreative/content/h5.png";
import dynamicCreative from "../../../img/webCreative/content/dynamic.png";
import vedioCreative from "../../../img/webCreative/content/vedio.png";
import rwdCreative from "../../../img/webCreative/content/rwd.png";

class WebCreativeFeatureView extends View {
  _parentElement = document.querySelector(".features");

  _generateMarkup() {
    console.log(this._data);
    return `
    <div class="creativeFeature">
      ${this._generateMarkupContent()}
    </div>
        `;
  }

  _generateMarkupContent() {
    const { introduce } = this._data;
    const creativeImgs = [
      h5Creative,
      dynamicCreative,
      vedioCreative,
      rwdCreative,
    ];
    return introduce
      .map((text, index) => {
        return `
        <figure class="creativeFeature_content">
            <img class="creativeFeature_image" src ="${creativeImgs[index]}">
            <figcation class="creativeFeature_text">${text}</figcaption>
          </figure>
    `;
      })
      .join("");
  }
}

export default new WebCreativeFeatureView();
