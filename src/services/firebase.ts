import firebase from 'firebase/app';


import 'firebase/auth'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyCQdJr1XaXDhOyZ8UCCcozAcvCNmSMcqP8",
    authDomain: "justask-ae05a.firebaseapp.com",
    databaseURL: "https://justask-ae05a-default-rtdb.firebaseio.com",
    projectId: "justask-ae05a",
    storageBucket: "justask-ae05a.appspot.com",
    messagingSenderId: "277109115031",
    appId: "1:277109115031:web:53323303b58f488e3f41d2"
  };


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();