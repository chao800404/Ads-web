/** @format */

class WindowView {
  addHandlerWindowSroll(handler) {
    window.addEventListener("scroll", handler);
  }

  addHandlerWindowLoad(handler) {
    window.addEventListener("load", handler);
  }

  reomoveHandlerWindowScroll(handler) {
    window.removeEventListener("scroll", handler);
  }
}

export default new WindowView();
