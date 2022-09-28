import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAB7I1yA2XJItb-de3YMaXxwKMV0TyqgF8",
    authDomain: "react-next-firebase-c2a82.firebaseapp.com",
    projectId: "react-next-firebase-c2a82",
    storageBucket: "react-next-firebase-c2a82.appspot.com",
    messagingSenderId: "305383490978",
    appId: "1:305383490978:web:26340fb2effae78ab15efb",
    measurementId: "G-G7X7D4VQ4G"
  };

  // if(!firebaseConfig.apps.length) {
    firebase.initializeApp(firebaseConfig);
  // }

  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();

  export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
  }