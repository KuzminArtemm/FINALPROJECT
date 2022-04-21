import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import initState from './redux/initState'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';


const store = createStore(rootReducer, initState(), composeWithDevTools(applyMiddleware(thunk)))

console.log(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
