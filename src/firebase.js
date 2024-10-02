import Firebase from "firebase/app";
import "firebase/remote-config";
const firebaseConfig = {
  apiKey: "Your Api Key ",
  authDomain: "yourapp.firebaseapp.com",
  databaseURL: "https://yourapp.firebaseio.com",
  projectId: "yourapp",
  storageBucket: "yourapp.appspot.com",
  messagingSenderId: "Some ID",
  appId: "Some ID",
  measurementId: "Some ID",
};
export const firebase = Firebase.initializeApp(firebaseConfig);
