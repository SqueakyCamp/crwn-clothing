import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyALPb8BIwcn5NGpKrWuEQSk7WksD5SA0lY",
  authDomain: "crwn-db-fbfa3.firebaseapp.com",
  projectId: "crwn-db-fbfa3",
  storageBucket: "crwn-db-fbfa3.appspot.com",
  messagingSenderId: "489757903892",
  appId: "1:489757903892:web:cefbd126021253288b2b01",
  measurementId: "G-8SVFYMWJ97",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
