/** @format */

import View from "../veiw";

class WebCreativeFeatureView extends View {
  _parentElement = document.querySelector(".features");

  _generateMarkup() {
    return `
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_cbhddpk5.json"  background="transparent" z-index="1000"  speed="1"  style="width: 300px; height: 300px;" hover loop></lottie-player>
        `;
  }
}

export default new WebCreativeFeatureView();
