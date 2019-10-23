import * as firebase from "firebase";
import "firebase/firestore";

function checkSetup() {
  if (
    !window.firebase ||
    !(firebase.app instanceof Function) ||
    !firebase.app().options
  ) {
    console.log(
      "You have not configured and imported the Firebase SDK. " +
        "Make sure you go through the codelab setup instructions and make " +
        "sure you are running the codelab using `firebase serve`"
    );
  }
}

// function initFirebaseAuth() {
//   // Listen to auth state changes.
//   firebase.auth().onAuthStateChanged(authStateObserver);
// }

export function saveMessage(messageText) {
  // Add a new message entry to the Firebase database.
  return firebase
    .firestore()
    .collection("messages")
    .add({
      name: "Alexandre",
      text: messageText,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .catch(function(error) {
      console.error("Error writing new message to Firebase Database", error);
    });
}

export function initFirebase() {
  checkSetup();

  firebase.initializeApp(process.env.FIREBASE_CONFIG);
  return firebase;
}
