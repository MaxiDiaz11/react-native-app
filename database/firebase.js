import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration

// const config = {
//     apiKey: "AIzaSyAzekdAASfZSk1PbnEpYR8FTxRQd_RdGSI",
//     projectId: "rnative-bd019",
//     databaseURL: "https://rnative-bd019-default-rtdb.firebaseio.com/",
//     authDomain: "rnative-bd019.firebaseapp.com",
//     // // OPTIONAL
//     // storageBucket: "STORAGE_BUCKET",
//     // messagingSenderId: "MESSAGING_SENDER_ID"
// };

var firebaseConfig = {
    apiKey: "AIzaSyAzekdAASfZSk1PbnEpYR8FTxRQd_RdGSI",
    authDomain: "rnative-bd019.firebaseapp.com",
    databaseURL: "https://rnative-bd019-default-rtdb.firebaseio.com",
    projectId: "rnative-bd019",
    storageBucket: "rnative-bd019.appspot.com",
    messagingSenderId: "666367634347",
    appId: "1:666367634347:web:29042d505b61d47c7180ee"
};
// Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// export default {
//     firebase,
//     db,
// }