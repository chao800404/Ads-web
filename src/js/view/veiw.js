/** @format */

export default class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._inner(markup);
  }

  _inner(markup) {
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  clear() {
    this._parentElement.innerHTML = "";
  }

  _organizeText(text, first, last) {
    const textArr = text.split(" ");
    const newText = textArr.slice(first, last).join(" ");
    return newText;
  }

  createObserver(rootMargin, threshold) {
    const options = {
      root: null,
      rootMargin,
      threshold,
    };
    const observer = new IntersectionObserver(
      this._observerHandler.bind(this),
      options
    );
    return observer;
  }

  addObserver(observer) {
    observer.observe(this._parentElement);
  }

  removeObserver(observer) {
    observer.unobserve(this._parentElement);
  }

  renderPageBg(background) {
    const body = document.querySelector("body");
    body.className = "";
    body.classList.add(background);
  }
}
