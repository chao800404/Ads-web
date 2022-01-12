/** @format */
export class Canvas {
  constructor(parenElement, url, loop = true) {
    this.parenElement = parenElement;
    this.url = url;
    this.loop = loop;
  }

  draw() {
    const ctx = this.parenElement.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    lottie.loadAnimation({
      renderer: "canvas",
      autoplay: true,
      loop: this.loop,
      path: this.url,
      rendererSettings: {
        context: ctx,
      },
    });
  }
}
