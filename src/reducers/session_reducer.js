import { RECEIVE_USER, LOGOUT_USER, UPDATE_BIO} from '../actions/session_actions';

const initialState = { currentUser: null };

const sessionReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_USER:
      const { email, uid, displayName, photoURL } = action.currentUser
      const user = { email, uid, displayName, photoURL }
      return Object.assign({}, state, { currentUser: user });
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
