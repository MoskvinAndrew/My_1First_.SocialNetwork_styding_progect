import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {AuthMeThunk, setAuthResultCode, setAuthUserData} from "../../Redux/auth-reduser";
import {Header} from "./header";
import {usersAPI} from "../../api/api";

export type HeaderContainerPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void,
    setAuthResultCode:(resultCode:number)=>void,
    AuthMeThunk:()=>void,


}


class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        // usersAPI.AuthMe().then((data) => {
        //         console.log(data);
        //         let {id,email,login} = data;
        //         this.props.setAuthUserData(id,email,login);
        //         this.props.setAuthResultCode(data.resultCode);
        // })
        this.props.AuthMeThunk();
    }

    render() {
        // @ts-ignore
        return <Header {...this.props}/>
    }


}

let mapStateToProps = (state: RootState) => {

    return{

         auth:state.auth.resultCode,
        login:state.auth.data.login,
    }}

export default connect(mapStateToProps, {
     setAuthUserData,
    setAuthResultCode,
    AuthMeThunk,


})(HeaderContainer);