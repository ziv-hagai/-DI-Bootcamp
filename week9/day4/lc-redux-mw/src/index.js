import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import { reducer } from './redux/reducers';

export const middleware = (store) => (next) => (action) => {
  console.log('state=>', store.getState());
  console.log('action=>', action);
  next(action);
  console.log('new state=>', store.getState());
};

const store = createStore(reducer, applyMiddleware(middleware, thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
