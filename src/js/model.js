/** @format */

import Home from "../JSON/Home.json";

import firm from "../JSON/firm.json";
import _ from "lodash";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { API_KEY } from "./congfig";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "shunjhin-web.firebaseapp.com",
  databaseURL:
    "https://shunjhin-web-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shunjhin-web",
  storageBucket: "shunjhin-web.appspot.com",
  messagingSenderId: "939311086016",
  appId: "1:939311086016:web:fcbb334f4cac7da5023025",
  measurementId: "G-5BE8S561RS",
};

export const state = {
  demo: {},
  feature: {},
  ourteam: {},
  consultation: {},
  firm: {},
};

const app = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase());

export const CreateStateobject = async function (hash = "home") {
  try {
    const hashs = hash.toLowerCase();
    console.log(hashs);
    const res = await get(child(dbRef, `${hashs}`));
    if (res.exists()) {
      const data = res.val();
      state.demo = data.demo;
      state.feature = data.features;
      state.ourteam = data.ourteam;
      state.consultation = data.consultation;
    } else throw new Error("找不到相對應頁面!!");
  } catch (err) {
    console.log(err);
  }
};
