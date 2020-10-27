import React from "react";
import H from './header.module.css';
import {NavLink} from "react-router-dom";
import logoImg from './planeLogo.png';
import {useDispatch} from "react-redux";
import {LogOutTC} from "../../Redux/auth-reduser";

type HeaderType = {
    isAuth:boolean,
    login:string|null,
}

export let Header = (props:HeaderType)=>{
    let dispatch = useDispatch()
    let onClickHandler = () =>{
        dispatch(LogOutTC());
    }

    return(
        <header className={H.header}>

<div> <img src= 'https://banner2.cleanpng.com/20180406/tie/kisspng-airplane-aircraft-maintenance-flight-transport-aeroplane-5ac7b14f05e3e0.1254718215230364950241.jpg'/></div>
            {props.isAuth? <div className={H.loginName}>{props.login}</div>:<div className={H.loginForm}><NavLink to={'/login'}>Login</NavLink></div>}
            {props.isAuth?<div><button onClick={onClickHandler}>Log Out</button></div>:null}
    </header>
       )
}
