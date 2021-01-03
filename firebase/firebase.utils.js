import firebase from "firebase/app";
import "firebase/firestore"; //for database
import "firebase/auth"  //for authentication


const firebaseConfig = {
  apiKey: "AIzaSyAeEbZ7BwBn9OMkm0lBfZmh_9ueC2mZJs8",
  authDomain: "shopimize-9465a.firebaseapp.com",
  projectId: "shopimize-9465a",
  storageBucket: "shopimize-9465a.appspot.com",
  messagingSenderId: "199474467132",
  appId: "1:199474467132:web:998cdc6a207a9eb9858e39"
};

firebase.initializeApp(firebaseConfig)   //initializing the config app

