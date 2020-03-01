import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDB08tbaoEJkF6WOMPzwiuqO3VLQlv6a4w",
    authDomain: "my-blog-c6ba5.firebaseapp.com",
    databaseURL: "https://my-blog-c6ba5.firebaseio.com",
    projectId: "my-blog-c6ba5",
    storageBucket: "my-blog-c6ba5.appspot.com",
    messagingSenderId: "206757446409",
    appId: "1:206757446409:web:ce41c81c17406cb01d49d8"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;