import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCKWK1CR2UiPV2Wjl6zd_wD5sqUy_Dl8aM",
  authDomain: "my-fridge-app-9e136.firebaseapp.com",
  projectId: "my-fridge-app-9e136",
  storageBucket: "my-fridge-app-9e136.appspot.com",
  messagingSenderId: "52190387449",
  appId: "1:52190387449:web:93f6f0ca47ff1082d6d628",
  measurementId: "G-J6R4CVWHJE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)