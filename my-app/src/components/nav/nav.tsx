import React from "react";
import navCss from './nav.module.css'
import {NavLink} from "react-router-dom";

function Nav() {
 return(

<nav className={navCss.nav}>
    <div className={navCss.item}><NavLink activeClassName={navCss.active} to='/Profile'>Profile</NavLink></div>
    <div className={navCss.item}><NavLink activeClassName={navCss.active} to='/Dialogs'>Messages</NavLink></div>
    <div className={navCss.item}><NavLink activeClassName={navCss.active} to='/News'>News</NavLink></div>
    <div className={navCss.item}><NavLink activeClassName={navCss.active} to='/Music'>Music</NavLink></div>
</nav>
 )};
export default Nav;