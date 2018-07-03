import * as firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyD1k56aHq4-KvNNVi-zNP-fvWH-_Y8-0c4",
  authDomain: "voting-337e4.firebaseapp.com",
  databaseURL: "https://voting-337e4.firebaseio.com",
  projectId: "voting-337e4",
  storageBucket: "",
  messagingSenderId: "382248771449"
};
firebase.initializeApp(config);

export const votesRef = firebase.database().ref('/votes');

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();