import { GENERATING_RESPONSE, RECEIVE_RESPONSE } from '../actions/message_actions';

const initialState = {loading: false};

const uiReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case RECEIVE_RESPONSE:
      return initialState
    case GENERATING_RESPONSE:
      return {loading: true}
    default:
      return state;
  }
};

export default uiReducer;
