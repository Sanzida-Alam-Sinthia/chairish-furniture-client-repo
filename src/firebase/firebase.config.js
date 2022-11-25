// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6ehnCkVdnDHw6QMZeXbP3M0-Lt79gw9w",
    authDomain: "resell-assignment-client.firebaseapp.com",
    projectId: "resell-assignment-client",
    storageBucket: "resell-assignment-client.appspot.com",
    messagingSenderId: "254389184429",
    appId: "1:254389184429:web:6c6e637e0994a9656ba324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;