import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { searchRobotsReducer, requestRobotsReducer } from './reducers';
import App from './containers/App';
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import "./index.css"

const rootReducer = combineReducers({searchRobotsReducer, requestRobotsReducer})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
 document.getElementById('root'));

registerServiceWorker();
