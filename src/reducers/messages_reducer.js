import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/message_actions';
import { LOGOUT_USER } from '../actions/session_actions';

const initialState = [];

const messagesReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_MESSAGE:
      return state.concat(action.message);
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default messagesReducer;
