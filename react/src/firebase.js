import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDIt02IWwHUlxc4VCoDrygQPCqE2fEL_c8",
  authDomain: "contenedor-de-imagenes-c112b.firebaseapp.com",
  projectId: "contenedor-de-imagenes-c112b",
  storageBucket: "contenedor-de-imagenes-c112b.appspot.com",
  messagingSenderId: "796223943668",
  appId: "1:796223943668:web:65e7015a1d0a33e023ffa1"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);