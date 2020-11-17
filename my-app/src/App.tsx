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
import {AuthMeThunk} from "./Redux/auth-reduser";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./Redux/app-reduser";
import {RootState} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader/preloader";
import {getUserStatusTC} from "./Redux/profile-reduser";

type AppPropsType = {
    initializeAppTC:()=>void,
    isInitialized:boolean,


}

class App extends  React.Component<AppPropsType>{
    componentDidMount() {
        this.props.initializeAppTC();

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
                        <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
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
