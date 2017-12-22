import { RECEIVE_MESSAGE } from '../actions/message_actions';

const initialState = {};

const messagesReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_MESSAGE:
      return state;
    default:
      return state;
  }
};

export default messagesReducer;
