import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyD_GxNR0jrxtahKjt2J194gSbZCJFr8gjk",
    authDomain: "story-hub-b62f1.firebaseapp.com",
    projectId: "story-hub-b62f1",
    storageBucket: "story-hub-b62f1.appspot.com",
    messagingSenderId: "602576979829",
    appId: "1:602576979829:web:92c0f8935b786340fe753c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();