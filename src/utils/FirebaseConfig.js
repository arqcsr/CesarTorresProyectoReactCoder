// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_CZTqKM1-gJoolmEHYdmEM0MfuEQivoo",
    authDomain: "reactjsprojectcoder.firebaseapp.com",
    projectId: "reactjsprojectcoder",
    storageBucket: "reactjsprojectcoder.appspot.com",
    messagingSenderId: "642571537010",
    appId: "1:642571537010:web:63408d5ec4a2c65a9f50eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

export default dataBase;

