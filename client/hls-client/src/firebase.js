// Import the functions you need from the SDKs you need
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDEcT1OU3iuqG8BhJkZINRk36JCUw2NN_o",
    authDomain: "rtspwebapp.firebaseapp.com",
    projectId: "rtspwebapp",
    storageBucket: "rtspwebapp.appspot.com",
    messagingSenderId: "448151389184",
    appId: "1:448151389184:web:ab40903637f42cfdaa44e5",
    measurementId: "G-5V34JEMY4Y"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig)

export default fire;