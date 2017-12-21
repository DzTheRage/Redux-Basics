// Base 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
// Redux import
import {Provider} from "react-redux";
// Import store
import store from "./store.js"
// Rendering APP

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
