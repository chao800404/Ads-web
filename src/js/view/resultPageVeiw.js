/** @format */

import View from "./veiw";

class ResultPageView extends View {
  //   _parentElement = document.querySelector(".container");

  addHandlerPage(handler) {
    ["load", "hashchange"].forEach((event) =>
      window.addEventListener(event, handler)
    );
  }

  windowsrolltoTop() {
    document
      .querySelector("body")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default new ResultPageView();
