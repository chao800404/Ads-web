/** @format */
import _ from "lodash";
import View from "../veiw";
import webDesignOption_1 from "../../../img/webdesign/feature/webDesignOption-1.webp";
import webDesignOption_2 from "../../../img/webdesign/feature/webDesignOption-2.webp";
import webDesignOption_3 from "../../../img/webdesign/feature/webDesignOption-3.webp";
import webDesignOption_4 from "../../../img/webdesign/feature/webDesignOption-4.webp";
import webDesignOption_5 from "../../../img/webdesign/feature/webDesignOption-5.webp";

class WebFeatureView extends View {
  _parentElement = document.querySelector(".features");

  _generateMarkup() {
    const { title, menu, introduce } = this._data;
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
    return data
      .map((content, index) => {
        const { text, title } = content;
        return `
          <div class="webFeature_content webFeature_hover-an-${index + 1}">
            <div class="webFeature_svg">
            <lottie-player src="${
              this._data.svg[index]
            }"  background="transparent"  speed="1"  style="width: 100%; height: 100%;"  loop  hover></lottie-player>
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
