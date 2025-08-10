import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCpPTQd0UjLLVGE9V5_dQYnDP5Mv4LftoM",
  authDomain: "besteamemail.firebaseapp.com",
  databaseURL: "https://besteamemail-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "besteamemail",
  storageBucket: "besteamemail.appspot.com",
  messagingSenderId: "546171300142",
  appId: "1:546171300142:web:3e22635aaa24f77de232bf",
  measurementId: "G-5V7CMY63QW"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
