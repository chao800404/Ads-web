/** @format */

class PromptView {
  _parentElement = document.querySelector(".prompt");

  togglePrompt() {
    this._parentElement.classList.toggle("prompt--active");
  }

  closePrompt() {
    const btn = this._parentElement.querySelector(".prompt__close");
    btn.addEventListener("click", () => {
      this._parentElement.classList.remove("prompt--active");
    });
  }
}
export default new PromptView();
