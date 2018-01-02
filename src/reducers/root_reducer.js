import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import MessagesReducer from './messages_reducer';
import UIReducer from './ui_reducer';

export default combineReducers({ session: SessionReducer, messages: MessagesReducer, ui: UIReducer});
