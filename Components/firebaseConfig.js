import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCZxp3kBByxqpw7DqlCQB0r_IeX8IamLSI",
    authDomain: "test-5df5f.firebaseapp.com",
    databaseURL: "https://test-5df5f.firebaseio.com",
    projectId: "test-5df5f",
    storageBucket: "",
    messagingSenderId: "897665527981"
  };
export const firebaseApp = firebase.initializeApp(config);