import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {AuthMeThunk, LogOutTC, setAuthUserData} from "../../Redux/auth-reduser";
import {Header} from "./header";

export type HeaderContainerPropsType = {

}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        // @ts-ignore
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.data.isAuth,
        login: state.auth.data.login,
    }
}

export default connect(mapStateToProps, {LogOutTC})(HeaderContainer);