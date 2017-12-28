import * as firebase from 'firebase';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const UPDATE_BIO = "UPDATE_BIO";

export const saveBio = (bio) => (dispatch, getState) => {
  const { uid } = getState().session.currentUser;
  const updates = {};
  updates['/users/' + uid + '/bio/'] = bio;
  return firebase.database().ref().update(updates)
  .then(() => dispatch(updateBio(bio)));
}

export const loginUserWithFacebook = () => dispatch => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
  .then((result) => handleUser(result, dispatch));
}

const writeUserData = (userId, email, photoURL, displayName) => {
  firebase.database().ref('users/' + userId).update({
    email,
    photoURL,
    displayName,
  });
}

const getBio = (uid) => {
  const bioRef = firebase.database().ref('/users/' + uid + '/bio/');
  return bioRef.once('value');
}

const handleUser = (result, dispatch) => {
  const { uid, email, photoURL, displayName } = result.user;
  const { isNewUser } = result.additionalUserInfo;
  if ( isNewUser ) {
    writeUserData( uid, email, photoURL, displayName );
  }
  let bio;
  getBio(uid).then(snap => {
    bio = snap.val();
  }).then(() => {
    const user = { uid, email, photoURL, displayName, bio };
    dispatch(receiveUser(user));
  })
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
