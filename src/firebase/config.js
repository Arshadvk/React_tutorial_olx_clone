import firebase from 'firebase' ;
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIhMi3e6tioTj9a_0cLIpsJCrOSPofl-g",
  authDomain: "olx-clone-a4962.firebaseapp.com",
  projectId: "olx-clone-a4962",
  storageBucket: "olx-clone-a4962.appspot.com",
  messagingSenderId: "454259968766",
  appId: "1:454259968766:web:afb262725fa2ce583333af",
  measurementId: "G-YNJRJ0G91E"
};

 export default firebase.initializeApp(firebaseConfig)

 