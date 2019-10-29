import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const config = {
  apiKey: "AIzaSyANcOWXw0H3TKpNtB2sD99li2Nh8_yLoek",
  authDomain: "skillthrive-test-s.firebaseapp.com",
  databaseURL: "https://skillthrive-test-s.firebaseio.com",
  projectId: "skillthrive-test-s",
  storageBucket: "skillthrive-test-s.appspot.com",
  messagingSenderId: "686389777879",
  appId: "1:686389777879:web:3545def7f37a2f31",
}

firebase.initializeApp(config)
firebase.firestore()
firebase.storage()

export default firebase
