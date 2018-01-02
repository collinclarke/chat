import { RECEIVE_MESSAGE, RECEIVE_RESPONSE } from '../actions/message_actions';
import { LOGOUT_USER } from '../actions/session_actions';

const initialState = {};

const messagesReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case RECEIVE_MESSAGE:
      const { message, id } = action;
      newState = Object.assign({}, state, {[id]: message})
      return newState;
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default messagesReducer;
