import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAKM319FMa9pEjCLYty1cIxmHbi5ilHazs",
  authDomain: "bsr-automation.firebaseapp.com",
  projectId: "bsr-automation",
  storageBucket: "bsr-automation.appspot.com",
  messagingSenderId: "194210371992",
  appId: "1:194210371992:web:0534fcf28aa5fc982533ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const Auth=getAuth();