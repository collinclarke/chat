import { RECEIVE_USER, LOGOUT_USER, UPDATE_BIO} from '../actions/session_actions';

const initialState = { currentUser: null };

const sessionReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_USER:
      return Object.assign({}, state, { currentUser: action.currentUser });
    case LOGOUT_USER:
      return initialState;
    case UPDATE_BIO:
      let newState = Object.assign({}, state);
      newState.currentUser.bio = action.bio;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
