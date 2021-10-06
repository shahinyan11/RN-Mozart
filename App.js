import React, {Component} from 'react'
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import createSageMiddleware from 'redux-saga'
import reducers from './src/store/reducers'
import watchers from './src/store/sagas'
import Main from "./src/Main";

const saga = createSageMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(saga)
);

saga.run(watchers);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        )
    }
}
