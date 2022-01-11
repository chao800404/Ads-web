/** @format */

class Scroll {
  _parentElement = document.querySelector(".scrollbar");
  _isDrawing = false;
  _scrollBtn = document.querySelector(".scrollbar__btn");
  _scrollbarHeight = this._parentElement.getBoundingClientRect().height;
  _fullWindow = document.querySelector("body");

  addHandlerScroll(handler) {
    this._scrollBtn.addEventListener("mousedown", (e) => {
      if (!this._scrollBtn) return;
      this._isDrawing = true;
      handler();
    });
  }

  scrollMotion() {
    const scrollbarTop = this._parentElement.getBoundingClientRect().top;
    const scrollBtnHeight = this._scrollBtn.getBoundingClientRect().height;
    const scrollbarBounding = this._scrollbarHeight - scrollBtnHeight / 2;
    window.addEventListener("mousemove", (e) => {
      let btnMove = e.y - scrollbarTop;
      if (this._isDrawing) {
        if (btnMove < 0) btnMove = 0;
        if (btnMove > scrollbarBounding + scrollBtnHeight / 2)
          btnMove = scrollbarBounding + scrollBtnHeight / 2;
        this._scrollBtnTransform(btnMove);
        this._scrollbarShadow(btnMove);
        this._windowSrollto(btnMove);
      }
    });
    window.addEventListener("mouseup", (e) => {
      this._isDrawing = false;
    });
  }

  _scrollbarShadow(btnMove) {
    const shadow = this._parentElement.querySelector(".scrollbar__bg");
    const shadowStyle = window.getComputedStyle(shadow, null).transform;
    const shadowPath = btnMove / this._scrollbarHeight;
    const shaodowTransformPrev = shadowStyle.split(",").slice(0, 3).join(",");
    const shaodowTransformLast = shadowStyle.split(",").slice(4, 6).join(",");
    shadow.style = `transform:${shaodowTransformPrev},${shadowPath},${shaodowTransformLast}`;
  }

  _windowSrollto(btnMove) {
    const windowHeight =
      this._fullWindow.getBoundingClientRect().height - window.innerHeight;

    const averageHeight = windowHeight / this._scrollbarHeight;
    const moveWindow = btnMove * averageHeight;
    this._scrollPage(moveWindow);
  }

  _scrollPage(move, smooth = "auto") {
    window.scrollTo({ top: move, behavior: smooth });
  }

  scrollBtnMove() {
    const currentScrollLoction = window.pageYOffset;
    const averageHeight =
      currentScrollLoction /
      (this._fullWindow.getBoundingClientRect().height - window.innerHeight);
    const currentScrollBtnLocation = averageHeight * this._scrollbarHeight;
    this._scrollBtnTransform(currentScrollBtnLocation);
    this._scrollbarShadow(currentScrollBtnLocation);
  }

  _scrollBtnTransform(btnMove) {
    this._scrollBtn.style = `transform:translateY(${btnMove}px)`;
  }

  addHandlerScrollbarClick(handler) {
    const bar = this._parentElement.querySelector(".scrollbar__bg-outside");
    bar.addEventListener("click", handler);
  }

  scrollBarClick(e) {
    const clickPlace = e.layerY;
    const averageHeight = clickPlace / this._scrollbarHeight;
    const pageMove =
      averageHeight *
      (this._fullWindow.getBoundingClientRect().height - window.innerHeight);
    this._scrollPage(pageMove, "smooth");
  }
}

export default new Scroll();
