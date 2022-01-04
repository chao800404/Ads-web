/** @format */

import View from "../veiw";
import searchImg from "../../../img/ourteam/serchicon.png";
import webImg from "../../../img/ourteam/webicon.png";
import codeImg from "../../../img/ourteam/codeicon.png";
import airplaneImg from "../../../img/ourteam/airplane.webp";
import earthImg from "../../../img/ourteam/earth.webp";
import { swipers } from "../swiperView";

class HomeOurteamView extends View {
  _parentElement = document.querySelector(".ourteams");
  _generateMarkup() {
    return `
      <div class="ourteam">
      <h2 class="heading-2 ourteam__heading ">${this._organizeText(
        this._data.title,
        0,
        2
      )} <span class="breakpoint-1">${this._organizeText(
      this._data.title,
      2,
      3
    )}</span> <span class="breakpoint-2">${this._data.ch_title}</span></h2>
      <div class="ourteam__content ">
          <div class="ourteam__content-swiper">
            <div class="swiper mySwiper ourteam__mySwiper">
              <div class="swiper-wrapper">
                  ${this._generateMarkupSwiperContent(this._data.process)}
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
      `;
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

  _observerHandler(entries) {
    const [entry] = entries;
    const limit = this._parentElement.children.length === 0;
    if (limit) return;
    const classLists = [
      "ourteam__heading-an-prev",
      "swiper-an-prev",
      "airplan-an-prev",
      "earth-an-prev",
    ];
    const dom = [...entry.target.children[0].children];
    if (!entry.isIntersecting) {
      dom.forEach((dom) => (dom.style = "opacity:0"));
      dom[2].classList.remove("ourteam__airplane-an");
      dom[3].classList.remove("ourteam__earth-an");
    } else {
      dom.forEach((dom, index) => {
        dom.style = "opacity:1";
        dom.classList.add(classLists[index]);
      });
      dom[2].classList.add("ourteam__airplane-an");
      dom[3].classList.add("ourteam__earth-an");
    }
  }
}

export default new HomeOurteamView();
