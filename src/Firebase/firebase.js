import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyBtQQueGSktH1v-nIouv_a_sMu70wMU1pA",
    authDomain: "stationary-shop-cdb45.firebaseapp.com",
    databaseURL: "https://stationary-shop-cdb45.firebaseio.com",
    projectId: "stationary-shop-cdb45",
    storageBucket: "stationary-shop-cdb45.appspot.com",
    messagingSenderId: "186662644233",
    appId: "1:186662644233:web:7b9c6549bb48dfe9fae6d8",
    measurementId: "G-9D147711EY"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire