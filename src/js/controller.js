/** @format */

"strict mode";

import "../scss/main.scss";

import "swiper/css";
import "swiper/css/navigation";
////////////////////////////////////////////////////////
import resultPageVeiw from "./view/resultPageVeiw";
import * as model from "./model";
import {
  ANCHOR,
  PAGE_BG,
  HOMEDEMO_SVG_AN,
  WEBDESIGNDEMO_SVG_AN,
  WEBDESIGN_SVG_AN_CONTENTS,
} from "./congfig";

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
import webCreativeFeatureView from "./view/webCreative/webCreativeFeatureView";

const controPageResult = async function () {
  const hash = window.location.hash.slice(1);
  const load = hash === "" ? undefined : hash;
  await model.CreateStateobject(load);
  resultPageVeiw.windowsrolltoTop();
  if (hash === ANCHOR[0] || hash === "") controHomePage();
  if (hash === ANCHOR[1]) controlWebDesignPage();
  if (hash === ANCHOR[2]) controlWebCreative();
  if (hash === ANCHOR[3]) controlWebAdsPage();
};
const controHomePage = async function () {
  await model.lottieFileAJAX(HOMEDEMO_SVG_AN);
  homedemo.renderPageBg(PAGE_BG[0]);
  homedemo.render(model.state.demo);
  homedemo.addHandlerStart(homedemo.addScrollView);
  homefeature.render(model.state.feature);
  homefeature.addHandlerOptions(homefeature.changeOptionContent);
  homefeature.addObserver(homefeature.createObserver("0px", 0.25));

  homeourteam.render(model.state.ourteam);
  homeourteam.addSwiper();
  homeourteam.addObserver(homeourteam.createObserver("0px", 0.25));

  homeconsultation.render(model.state.consultation);
  homeconsultation.addSwiper();
};

const controlWebDesignPage = async function () {
  await model.lottieFileAJAX(WEBDESIGNDEMO_SVG_AN);
  await model.lottieFileAJAX(WEBDESIGN_SVG_AN_CONTENTS);
  webDemoView.renderPageBg(PAGE_BG[1]);
  webDemoView.render(model.state.demo);
  webFeatureView.render(model.state.feature);
  webFeatureView.addHandlerList(webFeatureView.changeListImg);
  homeourteam.clear();
  homeourteam.removeObserver(homeourteam.createObserver("0px", 0.25));
  homeconsultation.clear();
};

const controlWebCreative = function () {
  webCreativeView.render(model.state.demo);
  webCreativeFeatureView.render();
};

const controlWebAdsPage = function () {
  webAdsDemoView.render(model.state.demo);
};

const init = function () {
  // controHomePage(model.state);
  resultPageVeiw.addHandlerPage(controPageResult);
};

init();
