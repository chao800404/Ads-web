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
import homedemo from "./view/Home/homedemoView";
import homefeature from "./view/Home/homefeatureView";
import homeourteam from "./view/Home/homeourteamView";
import homeconsultation from "./view/Home/homeconsultationView";

//////////////////////////////////////////////////////////

import webDemoView from "./view/Webdesign/webDemoView";
import webFeatureView from "./view/Webdesign/webFeatureView";
//////////////////////////////////////////////////////////////////

import webCreativeView from "./view/webCreative/webCreativeView";

//////////////////////////////////////////////////////////////////

import webAdsDemoView from "./view/webAds/webAdsDemoView";

const controPageResult = async function () {
  const hash = window.location.hash.slice(1);
  const load = hash === "" ? undefined : hash;
  await model.CreateStateobject(load);
  console.log(model.state);
  if (hash === ANCHOR[0] || hash === "") controHomePage();
  if (hash === ANCHOR[1]) controlWebDesignPage();
  if (hash === ANCHOR[2]) controlWebCreative();
  if (hash === ANCHOR[3]) controlWebAdsPage();
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

const controlWebDesignPage = function () {
  webDemoView.render(model.state.demo);
  webFeatureView.render(model.state.feature);
  webFeatureView.addHandlerList(webFeatureView.changeListImg);
};

const controlWebCreative = function () {
  webCreativeView.render(model.state.demo);
};

const controlWebAdsPage = function () {
  webAdsDemoView.render(model.state.demo);
};

const init = function () {
  // controHomePage(model.state);
  resultPageVeiw.addHandlerPage(controPageResult);
};

init();
