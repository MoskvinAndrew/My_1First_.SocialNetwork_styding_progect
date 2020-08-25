import React from "react";
import H from './header.module.css';
import {NavLink} from "react-router-dom";
function Header() {
       return(

           <header className={H.header}>
        <img className={H.img}
             src={'https://banner2.cleanpng.com/20180406/tie/kisspng-airplane-aircraft-maintenance-flight-transport-aeroplane-5ac7b14f05e3e0.1254718215230364950241.jpg'}/>
             <div className={H.loginForm}><NavLink to={'/login'}>Login</NavLink></div>
    </header>
       )
}
export default Header;