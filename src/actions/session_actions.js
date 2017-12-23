import * as firebase from 'firebase';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";

const writeUserData = (userId, email) => {
  firebase.database().ref('users/' + userId).set({
    email: email
  });
}

export const loginUserWithFacebook = () => dispatch => {
  const provider = new firebase.auth.FacebookAuthProvider();
  const fbAuth = result => {
    const { uid, email } = result.user;
    writeUserData( uid, email);
    dispatch(receiveUser(result.user));
  }
  firebase.auth().signInWithPopup(provider)
  .then(result => fbAuth(result));
}

export const logoutUser = () => dispatch => {
  const logoutUser = () => dispatch(logoutCurrentUser());
  firebase.auth().signOut().then(logoutUser);
}

export const receiveUser = currentUser => ({
  type: RECEIVE_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_USER
});
