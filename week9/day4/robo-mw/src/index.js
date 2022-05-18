import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
// import { reducer } from './redux/reducers';

import './index.css';

import { searchRobots } from './redux/reducers';

import 'tachyons';

const rootReducers = combineReducers({ searchRobots });
const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

reportWebVitals();

