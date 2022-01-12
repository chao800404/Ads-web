/** @format */

class HeaderView {
  _parentElement = document.querySelector(".header");
  _hamburgerMenu = document.querySelector(".header__menu");
  _hamburgerMenuBtn = document.querySelector(".header__hanburger");
  _isAppear = false;

  addHandlerHamburgerBtn(handler) {
    this._hamburgerMenuBtn.addEventListener("click", () => {
      handler();
    });
  }

  appearMenuContent() {
    if (!this._isAppear) {
      this._hamburgerMenu.classList.add("header__menu--active");
      this._isAppear = true;
    } else {
      this._hamburgerMenu.classList.remove("header__menu--active");
      this._isAppear = false;
    }
  }

  generateMarkupCloseBtn() {
    this._hamburgerMenu.addEventListener("transitionend", (e) => {
      const menuItem = this._hamburgerMenuBtn.firstElementChild;
      if (this._isAppear) {
        menuItem.style = "transform:rotate(180deg)";
      } else {
        menuItem.style = "transform:rotate(0)";
      }
    });
  }
}

export default new HeaderView();
