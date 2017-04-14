import React, { Component } from "react";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import FormApp from './formApp';


import devToolsEnhancer from 'remote-redux-devtools';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer, devToolsEnhancer());


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FormApp />
      </Provider>
    );
  }
}