import { combineReducers } from "redux"
import { firebaseReducer } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"
import courseReducer from "./course/courseReducer"

const rootReducer = combineReducers({
  course: courseReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})

export default rootReducer
