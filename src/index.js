import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, compose(middleware, window.devToolsExtension
  ? window.devToolsExtension()
  : f => f))

ReactDOM.render(
  <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'))
registerServiceWorker()
