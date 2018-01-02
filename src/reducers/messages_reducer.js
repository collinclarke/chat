import { RECEIVE_MESSAGE } from '../actions/message_actions';
import { LOGOUT_USER } from '../actions/session_actions';

const initialState = {};

const messagesReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_MESSAGE:
      const { message, id } = action;
      const newState = Object.assign({}, state, {[id]: message})
      return newState;
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default messagesReducer;
