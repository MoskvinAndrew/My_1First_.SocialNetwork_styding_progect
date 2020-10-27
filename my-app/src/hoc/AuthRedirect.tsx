import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {RootState} from "../Redux/redux-store";

type RedirectComponentTypes = {
         isAuth:boolean|null,
}

export const withAuthRedirect = (Component:any) => {

 class RedirectComponent extends React.Component<RedirectComponentTypes>{

     render(){
         if(!this.props.isAuth)
             return <Redirect to= '/login'/>
             return <Component {...this.props}/>
     }
 }

    let mapStateToPropsForRedirect = (state:RootState) =>({
        isAuth:state.auth.data.isAuth,
    })
  const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)



 return ConnectedRedirectComponent;
}