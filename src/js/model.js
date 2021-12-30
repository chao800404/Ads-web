/** @format */

import Home from "../JSON/Home.json";
import About from "../JSON/About.json";

import firm from "../JSON/firm.json";

import { ANCHOR } from "./congfig";

const firmImgs = [
  "firm-1",
  "firm-2",
  "firm-3",
  "firm-4",
  "firm-5",
  "firm-6",
  "firm-7",
  "firm-8",
  "firm-9",
  "firm-10",
  "firm-11",
  "firm-12",
  "firm-13",
  "firm-14",
].map((img) => require(`../img/firm/${img}.webp`));

export const state = {
  demo: {},
  feature: {},
  ourteam: {},
  consultation: {},
  firm: {},
};

export const CreateStateobject = function (hash) {
  if (hash === ANCHOR[0]) {
    state.demo = Home.demo;
    state.feature = Home.features;
    state.ourteam = Home.ourteam;
    state.consultation = Home.consultation;
    state.firm = { firm, firmImgs };
  }
  if (hash === ANCHOR[1]) {
    state.demo = About.demo;
    state.feature = About.features;
    state.ourteam = About.ourteam;
    state.consultation = "";
  }
};
