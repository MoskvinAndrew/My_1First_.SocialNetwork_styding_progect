import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {indexT, indexTT, indexTTT} from "./index"

export type appt = {
        postsData: Array<indexT>
        messagesData:Array<indexTTT>
        dialogsData: Array<indexTT>
};

function App(props: appt) {
    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/Dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/Profile' component={Profile}/>*/}
                    {/*<Route path='/News' component={News}/>*/}
                    {/*<Route path='/Music' component={Music}/>*/}

                    <Route path='/Dialogs' render={() => <Dialogs messagesData={props.messagesData}
                                                                  dialogsData={props.dialogsData}/>}/>
                    <Route path='/Profile' render={() => <Profile postsData={props.postsData}/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
