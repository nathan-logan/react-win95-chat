import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFFZVJpkt_4u_3_QrWM1AOKlXItcEMCao",
  authDomain: "win95chat-39f2c.firebaseapp.com",
  databaseURL: "https://win95chat-39f2c.firebaseio.com",
  projectId: "win95chat-39f2c",
  storageBucket: "win95chat-39f2c.appspot.com",
  messagingSenderId: "644023211847",
  appId: "1:644023211847:web:6ca3c104f558d6c481de62",
  measurementId: "G-HM7SE8HYXV"
};

const provider = new firebase.auth.EmailAuthProvider();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// email and password auth

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error('Error fetching user document', error);
  };
}

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName } = user;
    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData
      })
    } catch (error) {
      console.error('Error generating user document', error);
    }
  };
  return getUserDocument(user.uid);
}