import React from 'react';
import './App.css';
import Nav from "./components/nav/nav";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import ChatContainer from "./components/Dialogs/DialogItem/Chat/ChatContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/header/headerContainer";



function App() {



    return (

        <div className='app-wrapper'>

            <HeaderContainer/>
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
