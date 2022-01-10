/** @format */

import View from "../veiw";
import feature_1 from "../../../img/webads/features/feature_1.jpg";
import feature_2 from "../../../img/webads/features/feature_2.jpg";
import feature_3 from "../../../img/webads/features/feature_3.jpg";
import feature_4 from "../../../img/webads/features/feature_4.jpg";

class AdsFeatureView extends View {
  _parentElement = document.querySelector(".features");

  _generateMarkup() {
    return `
        <div class="adsFeature">
          ${this._generateMarkupAdsContent()}

          <div class="adsFeature_remind">
          <div class="adsFeature_remind_svg">
            <lottie-player  src="https://assets6.lottiefiles.com/packages/lf20_PXW1iS.json"  background="transparent"  speed="1"  hover></lottie-player>
          </div>
          <p class="adsFeature_remind_text">
          <span>${this._organizeText(
            this._data.features__server.text,
            0,
            4
          )}</span>
          <span>${this._organizeText(
            this._data.features__server.text,
            4,
            6
          )}</span>
          </p>
          </div>
          <button class="btn-3 adsFeature_btn">立刻預約</button>
         </div>
        `;
  }

  _generateMarkupAdsContent() {
    const { introduce } = this._data;
    const featureImgs = [feature_1, feature_2, feature_3, feature_4];
    return introduce
      .map((data, index) => {
        const { title, text } = data;
        return `
          <figure class="adsFeature_content">
            <img class="adsFeature_image" src ="${featureImgs[index]}">
            <figcation class="adsFeature_text">
              <h3 class="heading-3 adsFeature_text_title"> ${title}</h3>
              <p class="adsFeature_text_text"> ${text}</p>
            </figcaption>
          </figure>
        `;
      })
      .join("");
  }

  _organizeText(text, first, last) {
    const textArr = text.split("，");
    return textArr.slice(first, last).join("，") + "。";
  }

  addHandlerRemind(handler) {
    const remind = this._parentElement.querySelector(".adsFeature_remind");
    remind.addEventListener("mouseenter", (e) => {
      const mouseOverdom = e.target.closest(".adsFeature_remind");
      if (!mouseOverdom) return;
      handler(true);
    });
    remind.addEventListener("mouseleave", (e) => {
      handler(false);
    });
  }

  generateMarkupRemindImg = (life) => {
    const ishover = life ? "autoplay loop" : "";
    const svg = this._parentElement.querySelector(".adsFeature_remind_svg");
    const dom = ` <lottie-player  src="https://assets6.lottiefiles.com/packages/lf20_PXW1iS.json"  background="transparent"  speed="1" ${ishover}></lottie-player>`;
    svg.innerHTML = "";
    svg.insertAdjacentHTML("afterbegin", dom);
  };
}

export default new AdsFeatureView();
