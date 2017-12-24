import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './Store';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA8f3CYAYTVip8op5sWi3kfUrzgGE5NV8o",
  authDomain: "chat-a9f62.firebaseapp.com",
  databaseURL: "https://chat-a9f62.firebaseio.com",
  projectId: "chat-a9f62",
  storageBucket: "",
  messagingSenderId: "371809978008"
};

firebase.initializeApp(config);

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
