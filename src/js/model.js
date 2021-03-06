/** @format */

import _ from "lodash";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set, push } from "firebase/database";
// import { API_KEY } from "./congfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "shunjhin-20f67.firebaseapp.com",
  databaseURL:
    "https://shunjhin-20f67-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shunjhin-20f67",
  storageBucket: "shunjhin-20f67.appspot.com",
  messagingSenderId: process.env.MESSAGINGSENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

export const state = {
  demo: {},
  feature: {},
  ourteam: {},
  consultation: {},
  firm: {},
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(getDatabase());

export const CreateStateobject = async function (hash = "home") {
  try {
    const hashs = hash.toLowerCase();
    const firebaseRes = await get(child(dbRef, `${hashs}`));
    if (firebaseRes.exists()) {
      const data = firebaseRes.val();
      state.demo = data.demo;
      state.feature = data.features;
      state.ourteam = data.ourteam;
      state.consultation = data.consultation;
    } else throw new Error("找不到相對應頁面!!");
  } catch (error) {
    alert(error);
  }
};

export const writeUserData = async function (data) {
  try {
    const { username, phoneNumb, userEmail } = data;
    const userId = push(ref(db, "users")).key;
    set(ref(db, "users/" + userId), {
      name: username,
      phone: phoneNumb,
      email: userEmail,
    });

    Email.send({
      SecureToken: process.env.SECURETOKEN,

      To: "dds8251@gmail.com",
      From: "a0921342997@gmail.com",
      Subject: `客戶寄件 姓名:${username}`,
      Body: `客戶名稱:${username} \n 客戶電話:${phoneNumb} \n 客戶信箱:${userEmail}`,
    });
  } catch (error) {
    alert(error);
  }
};

export const lottieFileAJAX = async function (urls) {
  try {
    if (Array.isArray(urls)) {
      const fetchArr = urls.map((url) => fetch(url));
      const allRes = await Promise.all(fetchArr);
      state.feature.svg = allRes.map((url) => url.url);
    } else {
      const res = await fetch(urls);
      const url = res.url;
      state.demo.svgUrl = url;
    }
  } catch (error) {
    alert(error);
  }
};
