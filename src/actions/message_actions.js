import * as firebase from 'firebase';

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

const saveMessage = (uid, message) => {
  const newMsgKey = firebase.database().ref().child('messages').push().key;
  const updates = {};
  updates['/user-chat/' + uid + '/' + newMsgKey] = message;
  return firebase.database().ref().update(updates);
}

export const sendMessage = msgObj => dispatch => {
  const { message, uid} = msgObj;
  saveMessage(uid, message)
  .then(result => {
    console.log(result);
    dispatch(receiveMessage(message));
  })
}

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
})
