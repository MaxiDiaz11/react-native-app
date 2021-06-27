import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCMh7GvIuNEi07xJlOop1qKksCfrgbwAyI",
    authDomain: "appreactnative-3effb.firebaseapp.com",
    projectId: "appreactnative-3effb",
    storageBucket: "appreactnative-3effb.appspot.com",
    messagingSenderId: "78357229570",
    appId: "1:78357229570:web:967a6f2c64ff0383b4771b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    firebase,
    db,
}