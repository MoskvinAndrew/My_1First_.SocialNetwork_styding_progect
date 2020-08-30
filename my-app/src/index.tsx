import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store, {RootState} from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



export let rerenderEntireThree= (state:RootState) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App
                // dispatch={store.dispatch.bind(store)}
            />
            </Provider>
        </BrowserRouter>,

        document.getElementById('root')
    );
}

rerenderEntireThree(store.getState());

// store.subscribe (()=> {
//     let state = store.getState();
//     rerenderEntireThree(state);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
