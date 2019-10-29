import { createFirestoreInstance } from "redux-firestore"
import { Provider } from "react-redux"
import { ReactReduxFirebaseProvider } from "react-redux-firebase"
import React from "react"

import firebase from "../config/firebase"
import store from "./store"

const rrfProps = {
  firebase: typeof window !== "undefined" ? firebase : {},
  config: {
    attachAuthIsReady: true,
    firebaseStateName: "firebase",
    presence: "presence",
    sessions: "sessions",
    useFirestoreForProfile: true,
    userProfile: "users",
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
}

// Setup react-redux so that connect HOC can be used
export default ({ element }) => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        {element}
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}
