/** @format */

import Home from "../JSON/Home.json";
import About from "../JSON/About.json";

import firm from "../JSON/firm.json";

import { ANCHOR } from "./congfig";

import _ from "lodash";

export const state = {
  demo: Home.demo,
  feature: Home.features,
  ourteam: Home.ourteam,
  consultation: Home.consultation,
  firm: firm,
};

export const CreateStateobject = async function (hash) {
  if (hash === ANCHOR[0]) {
    state.demo = Home.demo;
    state.feature = Home.features;
    state.ourteam = Home.ourteam;
    state.consultation = Home.consultation;
    state.firm = firm;
  }
  if (hash === ANCHOR[1]) {
    state.demo = About.demo;
    state.feature = About.features;
    state.ourteam = About.ourteam;
    state.consultation = "";
  }
};
