import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCheWEh1bBctx7ouKA8pX9oWdTR00O-naY",
    authDomain: "ec-dhatextil2022.firebaseapp.com",
    projectId: "ec-dhatextil2022",
    storageBucket: "ec-dhatextil2022.appspot.com",
    messagingSenderId: "1066442499078",
    appId: "1:1066442499078:web:1e73a6c8de79dc9bce0f87"
  };

  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  export default db


  
