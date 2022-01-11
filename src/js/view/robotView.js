/** @format */

class RobotView {
  _parentElement = document.querySelector(".message");
  _body = document.querySelector("body");
  _currentPage;
  _lastSecPage;
  _timer = null;

  addHandlerRobot(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const robot = e.target.closest(".message__robot");
      if (!robot) return;
      handler();
    });
  }

  appearRobot() {
    const message = this._parentElement.querySelector(".message__container");
    const title = this._parentElement.querySelector(".message__title");
    message.classList.toggle("message--active");
    title.classList.toggle("message__title--active");
  }

  addHandlerCloseRobot(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const closeBtn = e.target.closest(".message__close");
      if (!closeBtn) return;
      handler();
    });
  }

  prevmoveRobot() {
    this._parentElement.classList.add("message--active--2");
  }

  moveRobot() {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      this._obseverTimeout();
    }, 1000);
    this._currentPage = this._body.getBoundingClientRect().bottom;
  }

  _obseverTimeout() {
    this._lastSecPage = this._body.getBoundingClientRect().bottom;
    if (this._currentPage === this._lastSecPage) {
      clearTimeout(this._timer);
      this._parentElement.classList.remove("message--active--2");
    }
  }
}

export default new RobotView();
