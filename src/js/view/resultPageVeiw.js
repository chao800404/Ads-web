/** @format */

import View from "./veiw";

class ResultPageView extends View {
  //   _parentElement = document.querySelector(".container");

  addHandlerPage(handler) {
    ["load", "hashchange"].forEach((event) =>
      window.addEventListener(event, handler)
    );
  }
}

export default new ResultPageView();
