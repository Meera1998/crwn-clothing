import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBtSrhk3Eowdj_xd-z1MATQQMTK9KgD3cI",
    authDomain: "crwn-db-28dec.firebaseapp.com",
    projectId: "crwn-db-28dec",
    storageBucket: "crwn-db-28dec.appspot.com",
    messagingSenderId: "234881717917",
    appId: "1:234881717917:web:50e1074cd41876c66da674",
    measurementId: "G-24TFNMLQ98"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'consent' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;