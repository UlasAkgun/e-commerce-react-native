import firebase from 'firebase';

// Initialize Firebase

const config = {
  apiKey: 'AIzaSyAYHV83je7wPv7Rx4bzGFp4hIHsPdyby2c',
  authDomain: 'cbuynew.firebaseapp.com',
  databaseURL: 'https://cbuynew.firebaseio.com',
  projectId: 'cbuynew',
  storageBucket: 'cbuynew.appspot.com',
  messagingSenderId: '671961133677',
};
try {
  firebase.initializeApp(config);
} catch (error) {
  console.log('===========FIREBASE_INIT============');
  console.log(error);
  console.log('====================================');
}

export const firebaseRef = firebase.database().ref();
export default firebase;
