/** @format */

"strict mode";

import "../scss/main.scss";

import "swiper/css";
import "swiper/css/navigation";
////////////////////////////////////////////////////////
import resultPageVeiw from "./view/resultPageVeiw";
import * as model from "./model";
import { ANCHOR } from "./congfig";

///////////////////////////////////////////////////////////
import homedemo from "./view/Home/homedemo";
import homefeature from "./view/Home/homefeature";
import homeourteam from "./view/Home/homeourteam";
import homeconsultation from "./view/Home/homeconsultation";

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

const controPageResult = async function () {
  const hash = window.location.hash.slice(1);
  const load = hash === "" ? undefined : hash;
  await model.CreateStateobject(load);
  console.log(model.state);
  if (hash === ANCHOR[0] || hash === "") {
    controHomePage();
  }
};
const controHomePage = function () {
  homedemo.render(model.state.demo);
  homedemo.addHandlerStart(homedemo.addScrollView);
  homefeature.render(model.state.feature);
  homefeature.addHandlerOptions(homefeature.changeOptionContent);
  homefeature.createObserver("0px", 0.25);
  homeourteam.render(model.state.ourteam);
  homeourteam.addSwiper();
  homeourteam.createObserver("0px", 0.2);
  homeconsultation.render(model.state.consultation);
  homeconsultation.addSwiper();
  homeconsultation.createObserver("0px", 0.2);
};

const init = function () {
  // controHomePage(model.state);
  resultPageVeiw.addHandlerPage(controPageResult);
};

init();
