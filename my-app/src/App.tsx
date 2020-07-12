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
import state, {rootStateType, StoreType} from "./Redux/State";
import Chat from "./components/Dialogs/DialogItem/Chat/Chat";


type AppTypes = {
    state:rootStateType,
    dispatch:(action:any)=>void,
};

function App(props:AppTypes) {

    return (
        /* <BrowserRouter>*/
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>

                    <Route path='/Dialogs' render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                                   messagesData={props.state.dialogsPage.messagesData}/>}/>
                    <Route path='/Profile' render={() => <Profile postsData={props.state.profilePage.postsData}
                                                                  dispatch={props.dispatch}

                                                                 />}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route exact path='/Chat' render={()=><Chat dispatch={props.dispatch}
                                                                messagesData={props.state.dialogsPage.messagesData}/>}/>

                </div>

            </div>
       /* </BrowserRouter>*/
    );
}

export default App;
