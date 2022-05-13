/** @format */

class PopupView {
  _parentElement = document.querySelector(".popup");
  _frequency = true;

  addHandlerPopup(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const close = e.target.closest(".popup__close");
      if (!close) return;
      handler();
    });
  }

  windowRemovePopup = () => {
    // this._parentElement.style = "transition: all .3s ease";
    this._parentElement.classList.remove("popup--active");
  };

  windowAddPopup = () => {
    if (this._frequency) {
      this._parentElement.classList.add("popup--active");
      this._frequency = false;
    }
  };
}

export default new PopupView();
