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
  CREATIVE_SVG_AN,
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
import webAdsFeatureView from "./view/webAds/webAdsFeatureView";

//////////////////////////////////////////////////////////////////

import webAdsDemoView from "./view/webAds/webAdsDemoView";
import webCreativeFeatureView from "./view/webCreative/webCreativeFeatureView";
import AdsFeatureView from "./view/webAds/webAdsFeatureView";
//////////////////////////////////////////////////////////////
import headerView from "./view/headerView";
import popupView from "./view/popupView";
import scrollView from "./view/scrollView";
import robotView from "./view/robotView";
import windowView from "./view/windowView";
import loadView from "./view/loadView";
import spinnerView from "./view/spinnerView";
import formView from "./view/Home/fomView";
import promptView from "./promptView";

const controPageResult = async function () {
  const hash = window.location.hash.slice(1);
  const load = hash === "" ? undefined : hash;
  spinnerView.addMarkupSpinner();
  await model.CreateStateobject(load);
  if (hash === ANCHOR[0] || hash === "") controHomePage();
  if (hash === ANCHOR[1]) controlWebDesignPage();

  if (hash === ANCHOR[2]) controlWebCreative();
  if (hash === ANCHOR[3]) controlWebAdsPage();
  resultPageVeiw.windowsrolltoTop("auto");
};

const controlReload = function () {
  window.location.hash = "";
};

const controHomePage = async function () {
  await model.lottieFileAJAX(HOMEDEMO_SVG_AN);
  loadView.generateMarkupLoad();
  homedemo.renderPageBg(PAGE_BG[0]);
  homedemo.render(model.state.demo);
  homedemo.addHandlerStart(homedemo.addScrollView);
  homefeature.render(model.state.feature);
  homefeature.addHandlerOptions(homefeature.changeOptionContent);
  homeourteam.render(model.state.ourteam);
  homeourteam.addSwiper();
  homeconsultation.render(model.state.consultation);
  homeconsultation.addSwiper();
  popupView.windowRemovePopup();
  spinnerView.removeMarkupSpinner();
  homeourteam.createObserver("0px", 0.25);
  homefeature.createObserver("0px", 0.25);
};

const controlWebDesignPage = async function () {
  homeconsultation.clear();
  homeourteam.clear();
  await model.lottieFileAJAX(WEBDESIGNDEMO_SVG_AN);
  await model.lottieFileAJAX(WEBDESIGN_SVG_AN_CONTENTS);
  webDemoView.renderPageBg(PAGE_BG[1]);
  webDemoView.render(model.state.demo);
  webFeatureView.render(model.state.feature);
  webFeatureView.addHandlerList(webFeatureView.changeListImg);
  popupView.windowRemovePopup();
  spinnerView.removeMarkupSpinner();
};

const controlWebCreative = async function () {
  homeconsultation.clear();
  homeourteam.clear();
  await model.lottieFileAJAX(CREATIVE_SVG_AN);
  webCreativeView.renderPageBg(PAGE_BG[2]);
  webCreativeView.render(model.state.demo);
  webCreativeFeatureView.render(model.state.feature);
  popupView.windowRemovePopup();
  spinnerView.removeMarkupSpinner();
};

const controlWebAdsPage = function () {
  homeconsultation.clear();
  homeourteam.clear();
  popupView.windowAddPopup();
  webAdsDemoView.renderPageBg(PAGE_BG[3]);
  popupView.windowAddPopup();
  webAdsDemoView.render(model.state.demo);
  AdsFeatureView.render(model.state.feature);
  spinnerView.removeMarkupSpinner();
};

const controlScroll = function (scrollBtn) {
  scrollView.scrollMotion(scrollBtn);
};

const controlScrollBarClickMove = function (e) {
  scrollView.scrollBarClick(e);
};

const controlRobot = function () {
  robotView.appearRobot();
};
const controlWindowScroll = function (e) {
  scrollView.scrollBtnMove();
  robotView.moveRobot();
  robotView.prevmoveRobot();
};

const controlHeaderMenu = function () {
  headerView.appearMenuContent();
  headerView.generateMarkupCloseBtn();
};

const controlLoadAn = function () {
  loadView.generateMarkupMouseAn();
};

const controlLoadAnFinish = function () {
  loadView.scollMoveToHeaderlogo(resultPageVeiw.windowsrolltoTop);
};

const controlForm = async function (data) {
  await model.writeUserData(data);
};

const controlCreativeBtn = function (btn) {
  promptView.closePrompt();
  promptView.togglePrompt();
};

const init = function () {
  windowView.addHandlerWindowLoad(controlLoadAn);
  popupView.addHandlerPopup(popupView.windowRemovePopup);
  resultPageVeiw.addHandlerPage(controPageResult);
  windowView.addHandlerWindowLoad(controlReload);
  scrollView.addHandlerScroll(controlScroll);
  windowView.addHandlerWindowSroll(controlLoadAnFinish);
  windowView.addHandlerWindowSroll(controlWindowScroll);
  scrollView.addHandlerScrollbarClick(controlScrollBarClickMove);
  robotView.addHandlerRobot(controlRobot);
  robotView.addHandlerCloseRobot(controlRobot);
  headerView.addHandlerHamburgerBtn(controlHeaderMenu);
  loadView.mouseAnFinish();
  spinnerView.generateMarkupSpinner();
  formView.addHandlerFormSubmit(controlForm);

  //////////////////////////
  ///mobile
  if (window.innerWidth < 780) {
    homefeature.addHandlerCreatives(controlCreativeBtn);
  }
};

init();
