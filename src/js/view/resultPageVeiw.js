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
    window.scrollTo(0, 0);
  }
}

export default new ResultPageView();
