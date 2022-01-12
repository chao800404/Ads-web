/** @format */

import View from "./veiw";

class ResultPageView extends View {
  //   _parentElement = document.querySelector(".container");

  addHandlerPage(handler) {
    ["load", "hashchange"].forEach((event) =>
      window.addEventListener(event, handler)
    );
  }

  windowsrolltoTop(smooth = "smooth") {
    if (smooth !== "smooth") smooth = "auto";
    document
      .querySelector("body")
      .scrollIntoView({ behavior: smooth, block: "start" });
  }

  // addHandlerWindowReload(handler) {
  //   window.addEventListener("beforeunload", handler);
  // }
}

export default new ResultPageView();
