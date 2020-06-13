import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


export type indexT = {
    id: number,
    message: string,
    likes: string
}

let postsData = [{id: 1, message: 'How are you?', likes: '12'},
    {id: 2, message: 'My name is Andrew', likes: '7'},
    {id: 3, message: 'How are you?', likes: '12'},
    {id: 4, message: 'How are you?', likes: '12'},
    {id: 5, message: 'My name is Andrew', likes: '777'}
];

ReactDOM.render(
    <React.StrictMode>
        <App
            postsData={postsData}

        />
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
