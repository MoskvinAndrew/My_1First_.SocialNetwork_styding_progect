import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./Redux/State";

export type indexT = {
    id: number,
    message: string,
    likes: string,

};
export type indexTT = {
    name:string,
    id:number
};
export type indexTTT = {
    text:string,
    id:number
};



// let postsData = [{id:1, message: 'How are you?', likes: '12'},
//     {id:2, message: 'My name is Andrew', likes: '7'},
//     {id:3, message: 'How are you?', likes: '12'},
//     {id:4, message: 'How are you?', likes: '12'},
//     {id:5, message: 'My name is Andrew', likes: '777'}
// ];
//
// let dialogsData = [
//     {id:1, name: 'Dima'},
//     {id:2, name: 'Andrew'},
//     {id:3, name: 'Kostya'},
//     {id:4, name: 'Lexa'}
//
// ];
// let messagesData = [
//     {id:1, text: 'Hello'},
//     {id:2, text: 'Hello'},
//     {id:3, text: 'Petya'},
//     {id:4, text: 'Goodbye'}
// ];

ReactDOM.render(
    <React.StrictMode>
        <App
            postsData={state.postsData}
            dialogsData={state.dialogsData}
            messagesData={state.messagesData}

        />
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
