// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCGIla0vC1OFD5TwYycFHjO9ofBxImF7Yw",
    authDomain: "clone-8f05a.firebaseapp.com",
    projectId: "clone-8f05a",
    storageBucket: "clone-8f05a.appspot.com",
    messagingSenderId: "636048264715",
    appId: "1:636048264715:web:00030ad5fc4aaefe22c10e",
    measurementId: "G-5165X8FT26"
  };

  
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  //const db = app.firestore();
  const auth = getAuth(app);

  export {app, auth};