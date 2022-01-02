/** @format */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { API_KEY } from "./congfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: API_KEY,
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
// const dbRef = ref(getDatabase());

// get(child(dbRef, `home`))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
// });
