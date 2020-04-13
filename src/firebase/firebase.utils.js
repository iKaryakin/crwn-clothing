import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDKJ7N78TH2c118B0XDFPPs3w0LRFcHss0',
  authDomain: 'crwn-db-254fd.firebaseapp.com',
  databaseURL: 'https://crwn-db-254fd.firebaseio.com',
  projectId: 'crwn-db-254fd',
  storageBucket: 'crwn-db-254fd.appspot.com',
  messagingSenderId: '135111462990',
  appId: '1:135111462990:web:0b6c9527ca79638e5db31f',
  measurementId: 'G-WZY3JDNN8N',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
