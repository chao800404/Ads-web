/** @format */

"strict mode";

import "../scss/main.scss";
// import Swiper JS
import Swiper from "swiper/bundle";

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

const controPageResult = function () {
  const hash = window.location.hash.slice(1);
  model.CreateStateobject(hash);
  if (hash === ANCHOR[0] || hash === "") {
    controHomePage(model.state);
  }
};

const controHomePage = function (data) {
  const { demo, feature, ourteam, consultation, firm } = data;
  homedemo.render(demo);
  homedemo.addHandlerStart(homedemo.addScrollView);
  homefeature.render(feature);
  homefeature.addHandlerOptions(homefeature.changeOptionContent);
  homefeature.createObserver("0px", 0.25);
  homeourteam.render(ourteam);
  homeourteam.addSwiper();
  homeourteam.createObserver("0px", 0.2);
  homeconsultation.render(consultation, firm);
  homeconsultation.addSwiper();
  homeconsultation.createObserver("0px", 0.2);
};

const init = function () {
  model.CreateStateobject(ANCHOR[0]);
  resultPageVeiw.addHandlerPage(controPageResult);
};

init();
