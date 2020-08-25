import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Chat from "./components/Dialogs/DialogItem/Chat/Chat";
import {rootStateType, StoreType} from "./Redux/Store";
import store, {RootState, StoreReduxType} from "./Redux/redux-store";
import profileReducer from "./Redux/profile-reduser";
import ChatContainer from "./components/Dialogs/DialogItem/Chat/ChatContainer";
import MyPostsContainer from "./components/Profile/My posts/MyPostsContainer";
// import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppTypes = {
    dispatch: (action: any) => void,
}

function App(props: AppTypes) {


    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>

                <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/News' render={() => <News/>}/>
                <Route path='/Music' render={() => <Music/>}/>
                <Route exact path='/Chat' render={() => <ChatContainer/>}/>
                <Route exact path='/users' render={() => <UsersContainer />}/>


            </div>

        </div>

    );
}

export default App;
