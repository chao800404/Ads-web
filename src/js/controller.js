/** @format */

"strict mode";

import "../scss/main.scss";

import "swiper/css";
import "swiper/css/navigation";
////////////////////////////////////////////////////////
// import resultPageVeiw from "./view/resultPageVeiw";
import * as model from "./model";

import { ANCHOR } from "./congfig";

///////////////////////////////////////////////////////////
// import homedemo from "./view/Home/homedemo";
// import homefeature from "./view/Home/homefeature";
// import homeourteam from "./view/Home/homeourteam";
// import homeconsultation from "./view/Home/homeconsultation";

import homeView from "./view/homeView";

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
  // const { demo, feature, ourteam, consultation, firm } = data;
  homeView.render(data);
  // homedemo.addHandlerStart(homedemo.addScrollView);
  // homedemo.addHandlerReize(homedemo.resizeDemo);
  // homefeature.render(feature);
  // homefeature.addHandlerOptions(homefeature.changeOptionContent);
  // homefeature.createObserver("0px", 0.25);
  // homeourteam.render(ourteam);
  // homeourteam.addSwiper();
  // homeourteam.createObserver("0px", 0.2);
  // homeconsultation.render(consultation, firm);
  // homeconsultation.addSwiper();
  // homeconsultation.createObserver("0px", 0.2);
};

const init = function () {
  controHomePage(model.state);
  // resultPageVeiw.addHandlerPage(controPageResult);
};

init();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDAMnZbUNX90M2k8o5idwT0xCuvds80Moo",
//   authDomain: "shunjhin-web.firebaseapp.com",
//   databaseURL:
//     "https://shunjhin-web-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "shunjhin-web",
//   storageBucket: "shunjhin-web.appspot.com",
//   messagingSenderId: "939311086016",
//   appId: "1:939311086016:web:fcbb334f4cac7da5023025",
//   measurementId: "G-5BE8S561RS",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase();
// const dbRef = ref(getDatabase());

// get(child(dbRef, `ThesStudents/${"test1"}`))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });
