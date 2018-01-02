import * as firebase from 'firebase';
import {ApiAiClient} from "api-ai-javascript";
const client = new ApiAiClient({accessToken: '86688ab5f02343429127629909460323'})

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const GENERATING_RESPONSE = "GENERATING_RESPONSE";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";

export const sendMessage = msgObj => dispatch => {
  const { uid, message } = msgObj;
  saveMessage(uid, message, false)
  dispatch(generateResponse(uid, message));
}

const saveMessage = (uid, message, bot) => {
  const newMsgKey = firebase.database().ref().child('messages').push().key;
  const updates = {};
  const newMsg = {
    message,
    bot
  };
  updates['/user-chat/' + uid + '/' + newMsgKey] = newMsg;
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
    const pathArray = snap.ref_.path.pieces_;
    const id = pathArray[pathArray.length - 1];
    const { bot, message } = snap.val();
    if (bot) {
      dispatch(receiveResponse());
    }
      dispatch(receiveMessage(snap.val(), id));
  })
}

export const generateResponse = (uid, message) => dispatch => {
  dispatch(generatingResponse());

  client.textRequest(message)
    .then( (response) => {
      const answer = response.result.fulfillment.speech;
      if (answer !== "") {
        const sv = () => saveMessage(uid, response.result.fulfillment.speech, true);
        // fake delay
        setTimeout(sv, 1000)
      } else {
        const unknown = () => saveMessage(uid, "I don't know what that means yet, sorry!", true);
        setTimeout(unknown, 500);
      }
    })
    .catch( (error) => { console.log(error) })
}

const generatingResponse = () => ({
  type: GENERATING_RESPONSE
})

const receiveResponse = () => ({
  type: RECEIVE_RESPONSE,
})

const receiveMessage = (message, id) => ({
  type: RECEIVE_MESSAGE,
  message,
  id
})
