import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAB7I1yA2XJItb-de3YMaXxwKMV0TyqgF8",
    authDomain: "react-next-firebase-c2a82.firebaseapp.com",
    projectId: "react-next-firebase-c2a82",
    storageBucket: "react-next-firebase-c2a82.appspot.com",
    messagingSenderId: "305383490978",
    appId: "1:305383490978:web:26340fb2effae78ab15efb",
    measurementId: "G-G7X7D4VQ4G"
  };

  if(!firebaseConfig.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();