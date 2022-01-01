/** @format */
const demoSvg = require("../../img/demo/ADS EMAMINER.svg");
const webDesign = require("../../img/introduce/introduce__1.svg");
const creative = require("../../img/introduce/introduce__2.svg");
const aboutus = require("../../img/introduce/introduce__3.svg");
const adsSvg = require("../../img/homeOtherBg/adsSvg.svg");
const severImg1 = require("../../img/Ads__type/type-1.svg");
const severImg2 = require("../../img/Ads__type/type-2.svg");
const severImg3 = require("../../img/Ads__type/type-3.svg");

import interactiveAds from "../../img/Ads__type/ads example-1.gif";
import videoAds from "../../img/Ads__type/ads example-2.gif";
import staticAds from "../../img/Ads__type/ads example-3.webp";
import googleAdsLogo from "../../img/google__service__logo/ads-logo.png";

import searchImg from "../../img/ourteam/serchicon.png";
import webImg from "../../img/ourteam/webicon.png";
import codeImg from "../../img/ourteam/codeicon.png";
import airplaneImg from "../../img/ourteam/airplane.webp";
import earthImg from "../../img/ourteam/earth.webp";
import Swiper from "swiper";

import { ANCHOR } from "../congfig";
import { form } from "../view/Home/fomView";

import planet1 from "../../img/Planet/planet-1.webp";
import planet2 from "../../img/Planet/planet-2.webp";
import planet3 from "../../img/Planet/planet-3.webp";
import planet4 from "../../img/Planet/planet-4.webp";

const consults = [
  "consult-1",
  "consult-2",
  "consult-3",
  "consult-4",
  "consult-5",
  "consult-6",
].map((consult) => require(`../../img/consult/${consult}.svg`));

import View from "./veiw";

class HomeView extends View {
  _parentElement = document.querySelector(".container");

  _generateMarkup() {
    const { demo, feature, ourteam, firm, consultation } = this._data;
    console.log(consultation);
    return `
        <section class="demos">
            <div class="demo">
                <div class="demo__text">
                    <h1 class="heading-1">${demo.title} <span>${
      demo.ch_title
    }</span></h1>
                    <p>${demo.text}</p>
                </div>
                <button class="btn demo__btn get__start"><a href="#">Get Started</a></button>
                <div class="demo__svg demo__an" viewBox="0 0 727 847" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                ${demoSvg}
            </div>
        </div>
        </section>
        <section class="features">
               <div class="feature">
               <h3 class="feature__title feature__title--active" data-option="0">Web design</h3>
               <h3 class="feature__title" data-option="1">Creatives</h3>
               <h3 class="feature__title" data-option="2">Abous us</h3>
               <figure class="feature__content">
                 <svg class="feature__content-img option-an--1">${webDesign}</svg>
                 <h2 class="heading-3 feature__content-heading"> ${
                   feature.introduce[0].title
                 } <span>${feature.introduce[0].en_title} </span></h2>
                 <p class="feature__content-text">${
                   feature.introduce[0].text
                 }</p>
               </figure>
               <button class="feature__btn feature__btn-1 btn-1">Contact Us</button>
               <button class="feature__btn feature__btn-2 btn-1 feature__anchor"><a href="#${
                 ANCHOR[1]
               }">Learn More</a></button>
            </div>
            <div class="feature__server">
              <h2 class="heading-2 feature__server__heading">
                <span>${this._organizeText(
                  feature.features__server.title,
                  0,
                  3
                )}</span>
                <span>${this._organizeText(
                  feature.features__server.title,
                  3,
                  5
                )}</span>
                <span>${feature.features__server.ch_title}</span>
              </h2>
              ${this._markupServer(feature.features__server.servers)}
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
        </section>
        <section class="ourteams">
        <div class="ourteam">
        <h2 class="heading-2 ourteam__heading ">${this._organizeText(
          ourteam.title,
          0,
          2
        )} <span class="breakpoint-1">${this._organizeText(
      ourteam.title,
      2,
      3
    )}</span> <span class="breakpoint-2">${ourteam.ch_title}</span></h2>
        <div class="ourteam__content ">
            <div class="ourteam__content-swiper">
              <div class="swiper mySwiper ourteam__mySwiper">
                <div class="swiper-wrapper">
                    ${this._generateMarkupSwiperContent(ourteam.process)}
                </div>
              </div>
            </div>
            <div class="swiper-button-next ourteam__content-btn ourteam__content-next"></div>
            <div class="swiper-button-prev ourteam__content-btn ourteam__content-prev"></div>
        </div>
        <div class="ourteam__airplane ">
          <img src="${airplaneImg}" alt="airplane">
        </div>
        <div class="ourteam__earth ">
          <img src="${earthImg}" alt="Earth">
        </div>
        </section>

        
        <section class="processes">
        <div class="process">
        <h2 class="heading-2 process__heading">
          ${consultation.title}
        </h2>
        ${this._generateMarkupProgressBtn(consultation.progress)}
        <h2 class="heading-2 process__consult__heading">${
          consultation.consult_title
        }</h2>
        <div class="process__consult__story">
          <div class="swiper mySwiper process__mySwiper">
            <div class="swiper-wrapper">
              ${this._generateMarkupProgressSwiper(
                consultation.consult_content
              )}
            </div>
            <div class="swiper-button-next process__consult-next"></div>
            <div class="swiper-button-prev process__consult-prev"></div>
          </div>
        </div>
        ${form}
        <div class="process__firm">
          <h2 class="process__firm__heading heading-2">
            <span>Cooperative manufacturer</span>
          </h2>
          ${this._generateMakupFirm()}
        </div>
        ${this._generateMakupPlanetBg()}
      </div>
        <section>
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

  _generateMarkupSwiperContent(data) {
    const imgs = [searchImg, webImg, codeImg];
    return data
      .map(
        (text, index) => `
        <figure class="ourteam__content__narrative swiper-slide ourteam__swiper-slide">
                      <img class="ourteam__content__img" src="${imgs[index]}" alt="swiperimg-${index}">
                      <figcaption class="ourteam__content__text">
                        ${text}
                      </figcaption>
                    </figure>
        `
      )
      .join("");
  }

  addSwiper() {
    const swiper = this._parentElement.querySelector(".ourteam__mySwiper");
    const nextBtn = this._parentElement.querySelector(".ourteam__content-next");
    const prevBtn = this._parentElement.querySelector(".ourteam__content-prev");
    swipers(swiper, nextBtn, prevBtn);
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
              <div class="process__consult__story__content-img">${consults[index]}</div>
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

  //   addSwiper() {
  //     const swiper = document.querySelector(".process__mySwiper");
  //     const nextBtn = document.querySelector(".process__consult-next");
  //     const prevBtn = document.querySelector(".process__consult-prev");
  //     swipers(swiper, nextBtn, prevBtn);
  //   }

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
    // return firm.firm;
    //   .map((firmText, index) =>
    //       `
    //   <div class="process__firm__card">
    //         <img src="" alt="firm" class="process__firm__img">
    //         <h5 class="process__firm__name heading-5">${firmText}</h5>
    //   </div>
    //   `
    //   )
    //   .join("");
  }
}

export default new HomeView();
