import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ6DJOLoVkdVEfMF7MVWG5Zd_QGv6dUOA",
  authDomain: "htc-app-90202.firebaseapp.com",
  projectId: "htc-app-90202",
  storageBucket: "htc-app-90202.appspot.com",
  messagingSenderId: "17867184277",
  appId: "1:17867184277:web:8c5a93381c6b7a5e55a39c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = ()=> {
    return firebase.firestore(app)
}
