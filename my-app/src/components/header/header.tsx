import React from "react";
import H from './header.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import store, {StoreReduxType} from "../../Redux/redux-store";
import {AuthMeThunk} from "../../Redux/auth-reduser";

type HeaderType = {

    auth:number|null,
    login:string|null,

}

export let Header = (props:HeaderType)=>{
    console.log(props.auth,props.login)


       return(



           <header className={H.header}>

        <img className={H.img}
             src={'https://banner2.cleanpng.com/20180406/tie/kisspng-airplane-aircraft-maintenance-flight-transport-aeroplane-5ac7b14f05e3e0.1254718215230364950241.jpg'}/>

               {props.auth == 0? props.login : <div className={H.loginForm}><NavLink to={'/login'}>Login</NavLink></div>}
               {/*<div className={H.loginForm}><NavLink to={'/login'}>Login</NavLink></div>*/}
    </header>
       )
}
