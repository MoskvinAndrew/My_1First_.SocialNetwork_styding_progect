import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Chat from "./components/Dialogs/DialogItem/Chat/Chat";
import {rootStateType, StoreType} from "./Redux/Store";
import store, {RootState, StoreReduxType} from "./Redux/redux-store";
import profileReducer from "./Redux/profile-reduser";
import ChatContainer from "./components/Dialogs/DialogItem/Chat/ChatContainer";


type AppTypes = {
    state: RootState,
    dispatch: (action: any) => void,
    store: StoreReduxType,
};

function App(props: AppTypes) {
debugger
    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>

                <Route path='/Dialogs' render={() => <Dialogs dialogsData={props.state.dialogsReducer.dialogsData}
                                                              messagesData={props.state.dialogsReducer.messagesData}/>}/>
                <Route path='/Profile' render={() => <Profile store={props.store}
                                                              dispatch={props.dispatch}/>}/>
                <Route path='/News' render={() => <News/>}/>
                <Route path='/Music' render={() => <Music/>}/>
                <Route exact path='/Chat' render={() => <ChatContainer store={props.store}
                                                              dispatch={props.dispatch}/>}/>
                                                             {/*messagesData={props.state.dialogsReducer.messagesData}*/}

            </div>

        </div>

    );
}

export default App;
