/** @format */

class WindowView {
  addHandlerWindowSroll(handler) {
    window.addEventListener("scroll", handler);
  }
}

export default new WindowView();
