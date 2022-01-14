/** @format */

import View from "../veiw";
import { swipers } from "../swiperView";
import formView from "../Home/fomView";

import planet1 from "../../../img/Planet/planet-1.webp";
import planet2 from "../../../img/Planet/planet-2.webp";
import planet3 from "../../../img/Planet/planet-3.webp";
import planet4 from "../../../img/Planet/planet-4.webp";
import firm1 from "../../../img/firm/firm-1.webp";
import firm2 from "../../../img/firm/firm-2.webp";
import firm3 from "../../../img/firm/firm-3.webp";
import firm4 from "../../../img/firm/firm-4.webp";
import firm5 from "../../../img/firm/firm-5.webp";
import firm6 from "../../../img/firm/firm-6.webp";
import firm7 from "../../../img/firm/firm-7.webp";
import firm8 from "../../../img/firm/firm-8.webp";
import firm9 from "../../../img/firm/firm-9.webp";
import firm10 from "../../../img/firm/firm-10.webp";
import firm11 from "../../../img/firm/firm-11.webp";
import firm12 from "../../../img/firm/firm-12.webp";
import firm13 from "../../../img/firm/firm-13.webp";
import firm14 from "../../../img/firm/firm-14.webp";

const consults = [
  "consult-1",
  "consult-2",
  "consult-3",
  "consult-4",
  "consult-5",
  "consult-6",
].map((consult) => require(`../../../img/consult/${consult}.png`));

class HomeConsultation extends View {
  _parentElement = document.querySelector(".processes");
  _generateMarkup() {
    return `
        <div class="process">
          <h2 class="heading-2 process__heading">
            ${this._data.title}
          </h2>

          ${this._generateMarkupProgressBtn(this._data.progress)}
          

          <h2 class="heading-2 process__consult__heading">${
            this._data.consult_title
          }</h2>
          <div class="process__consult__story">
            <div class="swiper mySwiper process__mySwiper">
              <div class="swiper-wrapper">
                ${this._generateMarkupProgressSwiper(
                  this._data.consult_content
                )}    
              </div>
              <div class="swiper-button-next process__consult-next"></div>
              <div class="swiper-button-prev process__consult-prev"></div>
            </div>
          </div>
          ${formView.generateMarkupForm()}
          <div class="process__firm">
            <h2 class="process__firm__heading heading-2">
              <span>Cooperative manufacturer</span>
            </h2>
            ${this._generateMakupFirm()}
          </div>

          ${this._generateMakupPlanetBg()}
        </div>
        `;
  }

  _generateMarkupProgressBtn(progressDatas) {
    return progressDatas
      .map(
        (data, index) =>
          `
        <div class="process__card process__card-${index + 1}">
            <div class="process__card__progress">
                <svg version="1.1" viewBox="0 0 70 70" preserveAspectRatio="xMinYMin meet">
                    <circle  cx="35" cy="35" r="25"/>
                    <circle  cx="35" cy="35" r="25"/>
                </svg>
            </div>
            <h4 class="process__card__numb">${data[0]}</h4>
            <h4 class="heading-5 process__card__heading">
                ${data[1]}
            </h4>
            <div class="process__card__plane process__card__plane-${
              index + 1
            }">&nbsp;</div>
            <p class="process__card__text">${data[2]}</p>
      </div>
        `
      )
      .join("");
  }

  _generateMarkupProgressSwiper(swiperDatas) {
    return swiperDatas
      .map((data, index) => {
        const { title, text } = data;
        const html = `
        <div class="process__consult__story__content swiper-slide  process__swiper-slide">
            <img class="process__consult__story__content-img" src="${consults[index]}">
            <div  class="process__consult__story__content-text">
                <h3 class="heading-3">${title}</h3>
                <p>${text}</p>
            </div>
        </div>
        `;

        return html;
      })
      .join("");
  }

  addSwiper() {
    const swiper = document.querySelector(".process__mySwiper");
    const nextBtn = document.querySelector(".process__consult-next");
    const prevBtn = document.querySelector(".process__consult-prev");
    swipers(swiper, nextBtn, prevBtn);
  }

  _generateMakupPlanetBg() {
    return [planet1, planet2, planet3, planet4]
      .map(
        (planet, index) => `
    <img class="process__planet process__planet-${
      index + 1
    }" src="${planet}" alt="planet">
    `
      )
      .join("");
  }

  _generateMakupFirm() {
    console.log(this._data);
    const firms = [
      firm1,
      firm2,
      firm3,
      firm4,
      firm5,
      firm6,
      firm7,
      firm8,
      firm9,
      firm10,
      firm11,
      firm12,
      firm13,
      firm14,
    ];
    return this._data.firm
      .map(
        (firmText, index) =>
          `
    <div class="process__firm__card">
          <img src="${firms[index]}" alt="firm" class="process__firm__img">
          <h5 class="process__firm__name heading-5">${this._data.firm[index]}</h5>
    </div>
    `
      )
      .join("");
  }

  // _observerHandler(entries) {
  //   const [entry] = entries;
  //   const doms = [...entry.target.children[0].children];
  //   const processCard = document.querySelectorAll(".process__card");
  //   if (!entry.isIntersecting) {
  //     processCard.forEach((card, index) =>
  //       card.classList.remove(`progressCard-an-${index + 1}`)
  //     );
  //     doms.forEach((dom) => {
  //       dom.classList.remove("progressDom-an-end");
  //       dom.classList.add("progressDom-an-prev");
  //     });
  //   } else {
  //     processCard.forEach((card, index) =>
  //       setTimeout(
  //         () => card.classList.add(`progressCard-an-${index + 1}`),
  //         index * 200
  //       )
  //     );
  //     doms.forEach((dom, index) => {
  //       setTimeout(() => {
  //         dom.classList.add("progressDom-an-end");
  //       }, index * 100);
  //     });
  //   }
  // }
}

export default new HomeConsultation();
