import { RECEIVE_USER, LOGOUT_USER} from '../actions/session_actions';

const initialState = { currentUser: null };

const sessionReducer = (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_USER:
      const { email, uid, displayName, photoURL } = action.currentUser
      const user = { email, uid, displayName, photoURL }
      return Object.assign({}, state, { currentUser: user });
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;
