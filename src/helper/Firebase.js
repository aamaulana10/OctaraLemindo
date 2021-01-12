import firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAV9dC4cOdB1fc2WpwqxzxA7ugFuGIub3w",
    authDomain: "octaralemindo.firebaseapp.com",
    projectId: "octaralemindo",
    storageBucket: "octaralemindo.appspot.com",
    messagingSenderId: "561566509884",
    appId: "1:561566509884:web:6288893a1c742214684c39",
    measurementId: "G-L79JW20YE4"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;