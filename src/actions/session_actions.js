import * as firebase from 'firebase';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";

const writeUserData = (userId, email, photoURL, displayName) => {
  firebase.database().ref('users/' + userId).set({
    email,
    photoURL,
    displayName
  });
}

export const updateProfile = (data, userId) => {
  firebase.database().ref('users/' + userId).set(data);
}

export const loginUserWithFacebook = () => dispatch => {
  const provider = new firebase.auth.FacebookAuthProvider();
  const fbAuth = result => {
    const { uid, email, photoURL, displayName } = result.user;
    writeUserData( uid, email, photoURL, displayName );
    dispatch(receiveUser(result.user));
  }
  return firebase.auth().signInWithPopup(provider)
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
