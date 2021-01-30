import React from 'react';
import './App.css';
import Nav from "./components/nav/nav";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import ChatContainer from "./components/Dialogs/DialogItem/Chat/ChatContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/Login/login";
import {AuthMeThunk} from "./Redux/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./Redux/app-reducer";
import {RootState} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader/preloader";
import {getUserStatusTC} from "./Redux/profile-reducer";
import P from "./components/Profile/Profile.module.css";
import MyPostsContainer from "./components/Profile/My posts/MyPostsContainer";

type AppPropsType = {
    initializeAppTC:()=>void,
    isInitialized:boolean,


}

class App extends  React.Component<AppPropsType>{
    callAllUnhandledErrors = (promiseRejectionEvent:any) => {
          alert('someError');                                    // вместо алерта вставим санку для диспатча ошибки в аппРеддюсер

    }
    componentDidMount() {
        this.props.initializeAppTC();
        window.addEventListener("somerejection",this.callAllUnhandledErrors);

    };
    componentWillUnmount() {
        window.removeEventListener("somerejection",this.callAllUnhandledErrors);
    }

    render() {
        if(!this.props.isInitialized){
         return <Preloader/>}
        return (




            <div className='mainWrapper'>
                <HeaderContainer/>
                <div className='navAndMain'>
                    <div className='navContent'><Nav/></div>
                    <div className='mainContent'>
                        <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/News' render={() => <News/>}/>
                        <Route path='/Music' render={() => <Music/>}/>
                        <Route exact path='/users' render={() => <UsersContainer/>}/>
                        <Route exact path='/Chat' render={() => <ChatContainer/>}/>
                        <Route exact path='/login' render={() => <Login/>}/>

                    </div>
                </div>
            </div>


        );
    }
}
let mapStateToProps = (state:RootState) =>{
    return (
        {isInitialized:state.app.initialized,

        })
}


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeAppTC}))(App)as React.ComponentType;
