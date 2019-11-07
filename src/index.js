import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware,createStore} from 'redux';
import {Provider} from 'react-redux';
import showTrack from './reducers/showTrack'
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk';

const store= createStore(showTrack, applyMiddleware(thunkMiddleware));
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
