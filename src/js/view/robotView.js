/** @format */

class RobotView {
  _parentElement = document.querySelector(".message");
  _body = document.querySelector("body");
  _currentPage;
  _lastSecPage;
  _timer = null;
  _message = document.querySelector(".message__container");
  _title = document.querySelector(".message__title");

  addHandlerRobot(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const robot = e.target.closest(".message__robot");
      if (!robot) return;
      handler();
    });
  }

  appearRobot() {
    this._message.classList.toggle("message--active");
    this._title.classList.toggle("message__title--active");
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
    this._message.classList.remove("message--active");
    this._title.classList.remove("message__title--active");
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
