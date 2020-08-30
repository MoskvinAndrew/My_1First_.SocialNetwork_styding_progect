import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {setAuthResultCode, setAuthUserData} from "../../Redux/auth-reduser";
import {Header} from "./header";

export type HeaderContainerPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void,
    setAuthResultCode:(resultCode:number)=>void,


}


class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((response: any) => {
                console.log(response.data.data)
                let {id,email,login} = response.data.data;
                this.props.setAuthUserData(id,email,login);
                this.props.setAuthResultCode(response.data.resultCode);



            })
    }

    render() {
        // @ts-ignore
        return <Header {...this.props}/>
    }


}

let mapStateToProps = (state: RootState) => {
    return{
   auth:state.auth.resultCode,
    }}

export default connect(mapStateToProps, {
    setAuthUserData: setAuthUserData,
    setAuthResultCode: setAuthResultCode,
})(HeaderContainer);