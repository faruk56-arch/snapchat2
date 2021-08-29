
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAxU-0GR3mDmimHBireQqpIidx6OriDxnw",
    authDomain: "snapchatclone-874c4.firebaseapp.com",
    projectId: "snapchatclone-874c4",
    storageBucket: "snapchatclone-874c4.appspot.com",
    messagingSenderId: "706958782265",
    appId: "1:706958782265:web:44a9c559e39c1733e8c2e8",
    measurementId: "G-5SVGMKTFXP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, storage, provider }
