import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAM7kmVxBB4qLI-bm2joz3DpFVwVG5Ym8I",
  authDomain: "clone-8fc06.firebaseapp.com",
  projectId: "clone-8fc06",
  storageBucket: "clone-8fc06.appspot.com",
  messagingSenderId: "857674273067",
  appId: "1:857674273067:web:3e7226bf02e956d28a756e"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
