import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config"

const appInit=()=>{
    initializeApp(firebaseConfig)
}

export default appInit;