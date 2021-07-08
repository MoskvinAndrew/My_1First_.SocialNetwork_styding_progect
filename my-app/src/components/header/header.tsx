import React, {useState} from "react";
import H from './header.module.css';
import {NavLink} from "react-router-dom";
import logoImg from "../../assets/planeLogo.png";
import exit from "../../assets/exit.svg"
import {useDispatch} from "react-redux";
import {LogOutTC} from "../../Redux/auth_reducer_test/auth-reducer";
import logIn from "../../assets/logIn.svg";


type HeaderType = {
    isAuth: boolean ,
    login: string|null,
}

export let Header = (props: HeaderType) => {


    let dispatch = useDispatch()
    let onClickHandler = () => {
        dispatch(LogOutTC());
    }

    return (
        <header className={H.header}>

            <div className={H.ImglogoTextWrapp}>
                <img src={logoImg} alt="icon"/>
                <div className={H.logoNameSpan}>
                    <h1>AVIATO</h1>
                    <span className={H.logoText}>social network for aviators</span>
                </div>

            </div>


            {props.isAuth ? null :

                <div className={H.exit}>
                    <NavLink to={'/login'}>Login</NavLink>
                    <img src={logIn}/>
                </div>}
            {props.isAuth ?
                <div className={H.exit}>

                <span  onClick={onClickHandler}>Exit</span>
                    <img src={exit}/>

            </div> : null}
        </header>
    )
}
