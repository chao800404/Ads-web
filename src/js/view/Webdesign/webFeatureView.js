/** @format */

import View from "../veiw";
import webDesignOption_1 from "../../../img/webdesign/feature/webDesignOption-1.webp";
import webDesignOption_2 from "../../../img/webdesign/feature/webDesignOption-2.webp";
import webDesignOption_3 from "../../../img/webdesign/feature/webDesignOption-3.webp";
import webDesignOption_4 from "../../../img/webdesign/feature/webDesignOption-4.webp";
import webDesignOption_5 from "../../../img/webdesign/feature/webDesignOption-5.webp";
const webDesignContent_1 = require("../../../img/webdesign/feature/feature__content-1.svg");
const webDesignContent_2 = require("../../../img/webdesign/feature/feature__content-2.svg");
const webDesignContent_3 = require("../../../img/webdesign/feature/feature__content-3.svg");
const webDesignContent_4 = require("../../../img/webdesign/feature/feature__content-4.svg");
const webDesignContent_5 = require("../../../img/webdesign/feature/feature__content-5.svg");
const webDesignContent_6 = require("../../../img/webdesign/feature/feature__content-6.svg");

class WebFeatureView extends View {
  _parentElement = document.querySelector(".features");

  _generateMarkup() {
    const { title, menu, introduce } = this._data;
    console.log(this._data);
    return `
    <div class="webFeature">
      <ul class="webFeature_Option">
        <h3 class="heading-3 webFeature-title"> ${title} </h3>
        ${this._generateMakupList(menu)}
        <img class="webFeature_img" src="${webDesignOption_1}">
      </ul>

      <div class="webFeature_order">
        ${this._generateMarkupContent(introduce)}
      </div>
    </div>
    `;
  }

  _generateMakupList(data) {
    return data
      .map(
        (list, index) =>
          ` <li class="webFeature_Option-ls ${
            index === 0 ? "webFeature_Option-ls--active" : ""
          }" data-option="${index + 1}">${list}</li>`
      )
      .join("");
  }

  _generateMarkupContent(data) {
    const webDesignContents = [
      webDesignContent_1,
      webDesignContent_2,
      webDesignContent_3,
      webDesignContent_4,
      webDesignContent_5,
      webDesignContent_6,
    ];
    return data
      .map((content, index) => {
        const { text, title } = content;
        return `
          <div class="webFeature_content webFeature_hover-an-${index + 1}">
            <div class="webFeature_svg ">
                ${webDesignContents[index]}
            </div>
            <h3>${index + 1}<h3>
            <h4 class="heading-4 webFeature_titles">
            <span>${title}</span>
            <span>${text}</span>
            </h4>
        </div>
          `;
      })
      .join("");
  }

  addHandlerList(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".webFeature_Option-ls");
      if (!btn) return;
      const optionNumb = btn.dataset.option;
      handler(optionNumb);
      document
        .querySelectorAll(".webFeature_Option-ls")
        .forEach((btn) => btn.classList.remove("webFeature_Option-ls--active"));
      btn.classList.toggle("webFeature_Option-ls--active");
    });
  }

  changeListImg(optionNumb) {
    console.log(optionNumb);
    const img = document.querySelector(".webFeature_img");
    const images = [
      webDesignOption_1,
      webDesignOption_2,
      webDesignOption_3,
      webDesignOption_4,
      webDesignOption_5,
    ];
    img.src = images[optionNumb - 1];
  }
}

export default new WebFeatureView();
