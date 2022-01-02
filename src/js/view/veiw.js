/** @format */

export default class View {
  _data;
  _data2;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._inner(markup);
  }

  _inner(markup) {
    if (!markup) return;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
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
    const observer = new IntersectionObserver(this._observerHandler, options);
    observer.observe(this._parentElement);
  }
}
