/** @format */

import View from "../veiw";
import { ANCHOR } from "../../congfig";

import interactiveAds from "../../../img/Ads__type/ads example-1.gif";
import videoAds from "../../../img/Ads__type/ads example-2.gif";
import staticAds from "../../../img/Ads__type/ads example-3.webp";
import googleAdsLogo from "../../../img/google__service__logo/ads-logo.png";

const webDesign = require("../../../img/introduce/introduce__1.svg");
const creative = require("../../../img/introduce/introduce__2.svg");
const aboutus = require("../../../img/introduce/introduce__3.svg");
const adsSvg = require("../../../img/homeOtherBg/adsSvg.svg");
const severImg1 = require("../../../img/Ads__type/type-1.svg");
const severImg2 = require("../../../img/Ads__type/type-2.svg");
const severImg3 = require("../../../img/Ads__type/type-3.svg");

class HomeFeature extends View {
  _parentElement = document.querySelector(".features");

  _generateMarkup() {
    return `
    <div class="feature">
       <h3 class="feature__title feature__title--active" data-option="0">Web design</h3>
       <h3 class="feature__title" data-option="1">Creatives</h3>
       <h3 class="feature__title" data-option="2">Abous us</h3>
       <figure class="feature__content">
         <svg class="feature__content-img option-an--1">${webDesign}</svg>
         <h2 class="heading-3 feature__content-heading"> ${
           this._data.introduce[0].title
         } <span>${this._data.introduce[0].en_title} </span></h2>
         <p class="feature__content-text">${this._data.introduce[0].text}</p>
       </figure>
       <button class="feature__btn feature__btn-1 btn-1">Contact Us</button>
       <button class="feature__btn feature__btn-2 btn-1 feature__anchor"><a href="#${
         ANCHOR[1]
       }">Learn More</a></button>
    </div>


    <div class="feature__server">
      <h2 class="heading-2 feature__server__heading">
        <span>${this._organizeText(
          this._data.features__server.title,
          0,
          3
        )}</span>
        <span>${this._organizeText(
          this._data.features__server.title,
          3,
          5
        )}</span>
        <span>${this._data.features__server.ch_title}</span> 
      </h2>


      ${this._markupServer(this._data.features__server.servers)}

      <div class="feature__server__img feature_animate-prev">
        <div class="feature__server__img-bg ">
          ${adsSvg}
        </div>

        ${[interactiveAds, videoAds, staticAds]
          .map(
            (img, index) =>
              `<img class="feature__server__img-example feature__server__img-example-${
                index + 1
              }" src="${img}" alt="example${index + 1}">`
          )
          .join("")}
        <img class="feature__server__img-init" src="${googleAdsLogo}" alt="Ads Logo">
        </div>
    </div>
        `;
  }

  addHandlerOptions(handler) {
    this._parentElement.addEventListener(
      "click",
      function (e) {
        const option = e.target.closest(".feature__title");
        if (!option) return;
        handler(option);
        this._addClassListBtn(option);
      }.bind(this)
    );
  }

  changeOptionContent = (option) => {
    const optionItem = +option.dataset.option;
    const content = this._parentElement.querySelector(".feature__content");
    content.innerHTML = "";
    const optionContent = `
         <svg class="feature__content-img option-an--${
           optionItem + 1
         }">${this._addOptionSvg(optionItem)}</svg>
         <h2 class="heading-3 feature__content-heading"> ${
           this._data.introduce[optionItem].title
         } <span>${this._data.introduce[optionItem].en_title} </span></h2>
         <p class="feature__content-text">${
           this._data.introduce[optionItem].text
         }</p>
    `;
    content.insertAdjacentHTML("afterbegin", optionContent);
    this._addBtnAnchor(optionItem);
  };

  _addClassListBtn(option) {
    const btns = this._parentElement.querySelectorAll(".feature__title");
    btns.forEach((btn) => btn.classList.remove("feature__title--active"));
    option.classList.add("feature__title--active");
  }

  _addOptionSvg(optionItem) {
    if (optionItem === 0) return webDesign;
    if (optionItem === 1) return creative;
    if (optionItem === 2) return aboutus;
  }

  _addBtnAnchor(optionItem) {
    const anchor =
      this._parentElement.querySelector(".feature__anchor").firstElementChild;
    anchor.setAttribute("href", `#${ANCHOR[optionItem + 1]}`); // Because Achors Arrary first item is Home, so need plus 1
  }

  _markupServer(data) {
    const imgs = [severImg1, severImg2, severImg3];

    return data
      .map(
        (server, index) =>
          `<div class="feature__server__content feature__server__content-${
            index + 1
          }">
        <div class="feature__server--type"> 
            ${imgs[index]}
          </div>
            <h4 class="feature__server__title heading-4">
              ${this._organizeText(server.title, 0, 1)}
              <spna>${this._organizeText(server.title, 1, 2)}  </spna>
            </h4>
            <p class="feature__server__text">
              ${server.text}
            </p>
       </div>`
      )
      .join("");
  }

  _observerHandler(entries) {
    const [entry] = entries;
    const title = document.querySelector(".feature__server__heading");
    const webImgBg = document.querySelector(".feature__server__img");
    if (!entry.isIntersecting) {
      title.style =
        "transform:translateX(-10rem); opacity:0; visibility:hidden;";
      webImgBg.classList.remove("feature_animate-end");
    } else {
      title.style = "transform:translateX(0rem);opacity:1; visibility: visble;";
      webImgBg.classList.add("feature_animate-end");
    }
  }
}

export default new HomeFeature();
