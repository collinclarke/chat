import * as firebase from 'firebase';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const UPDATE_BIO = "UPDATE_BIO";

const writeUserData = (userId, email, photoURL, displayName) => {
  firebase.database().ref('users/' + userId).set({
    email,
    photoURL,
    displayName,
    bio: ""
  });
}

export const saveBio = (bio) => (dispatch, getState) => {
  const { uid } = getState().session.currentUser;
  const updates = {};
  updates['/users/' + uid + '/bio/'] = bio;
  return firebase.database().ref().update(updates)
  .then(() => dispatch(updateBio(bio)));
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

const updateBio = bio => ({
  type: UPDATE_BIO,
  bio
})
