
import 'whatwg-fetch';
// import firebase from 'firebase';
import { endpoint } from './config';
import firebase, { firebaseRef } from './firebase';
import { USER_LOGIN, USER_LOGOUT, USER_ONLINE, USER_OFFLINE } from '../constants/actionTypes';

function upsertUserMainServer(firstname, lastname, email, uid) {
  const endPoint = `${endpoint}cbUsers`;
  fetch(endPoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstname, lastname, email, id: uid }),
  }).then(response => response.json())
    .then((json) => {
      console.log('user saved on main server', json);
    }).catch((err) => {
      console.log('user can not save on main server', err);
      console.log(firstname, lastname, email);
    });
}
export function createUser(firstname, lastname, email, password) {
  return (dispatch, getState) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        const userRef = firebaseRef.child('users/' + user.uid);
        upsertUserMainServer(firstname, lastname, email, user.uid);
        userRef.set({
          firstname,
          lastname,
          email,
        });
        user.updateProfile({
          displayName: firstname + lastname,
          photoURL: 'xx',
        }).then(function () {
          console.log('Update successful');
        }).catch(function (error) {
          console.log('An error happened while updating user profile');
        });

        dispatch({ type: USER_LOGIN, payload: user.uid });
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };
}
export function startLogin(email, password) {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // const userRef = firebase.database().ref(`users/${user.uid}`);
        // userRef.once('value').then((snapshot) => {
        //   const { firstname, lastname } = snapshot.val();
        //   dispatch({
        //     type: USER_LOGIN, payload: {
        //       uid: user.uid,
        //       displayName: user.displayName,
        //       firstname,
        //       lastname,
        //       email: user.email
        //     }
        //   });
        // });
        // return firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
        //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        //   // ...
        // });
        // console.log('user id', user.uid);

      })
      .catch((error) => {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // console.log(error);
        alert("Invalid email/password combination.");
        // ...
      });
  };
}
export function startLogout() {
  return (dispatch, getState) => {
    const user = getState().auth;
    dispatch({ type: USER_LOGOUT });
    const disconnectedRef = firebase.database().ref(`disconnected/${user.uid}`);
    disconnectedRef.set({
      userId: user.uid,
      key: user.connectionKey,
    }).then(() => {
      firebase.auth().signOut().then(() => {
        console.log('logged out');
      });
    });
    // firebase.database().ref(`users/${user.uid}/connections`)
    //   .child(user.connectionKey).remove();
  };
}
export function userOnline(uid, key) {
  return (dispatch, getState) =>
    dispatch({ type: USER_ONLINE, payload: { uid, key } });
  console.log('user online');
}
export function userStatus() {
  return (dispatch) => {
    const user = firebase.auth().currentUser;
    // const userRef = firebaseRef.child('users/' + user.uid);
    // userRef.once('value').then((snapshot) => {
    //   const val = snapshot.val();
    //   console.log(val);
    // });
    if (!user) dispatch({ type: USER_LOGOUT });
  };
}
