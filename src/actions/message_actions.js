import * as firebase from 'firebase';

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

const saveMessage = (uid, message) => {
  const newMsgKey = firebase.database().ref().child('messages').push().key;
  const updates = {};
  updates['/user-chat/' + uid + '/' + newMsgKey] = message;
  return firebase.database().ref().update(updates);
}

const getCurrentUser = () => (dispatch, getState) => {
  const { uid } = getState().session.currentUser;
  return uid;
}

export const watchMessages = dispatch => {
  const uid = dispatch(getCurrentUser());
  const msgRef = firebase.database().ref('user-chat/' + uid);
  msgRef.on('child_added', snap => {
    dispatch(receiveMessage(snap.val()));
  })
}

export const sendMessage = msgObj => dispatch => {
  const { message, uid} = msgObj;
  saveMessage(uid, message);
}

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
})

const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
})
