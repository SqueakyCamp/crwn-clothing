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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //this is a reference to the document

  const snapShot = await userRef.get(); // this uses the existing reference to get the actual data

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        // uses the user reference (not the snapshot) to create the data
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
