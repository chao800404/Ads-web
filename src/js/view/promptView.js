/** @format */

class PromptView {
  _parentElement = document.querySelector(".prompt");

  togglePrompt() {
    setTimeout(
      () => this._parentElement.classList.toggle("prompt--active"),
      200
    );
  }

  closePrompt() {
    const btn = this._parentElement.querySelector(".prompt__close");
    btn.addEventListener("click", () => {
      this._parentElement.classList.remove("prompt--active");
    });
  }
}
export default new PromptView();
