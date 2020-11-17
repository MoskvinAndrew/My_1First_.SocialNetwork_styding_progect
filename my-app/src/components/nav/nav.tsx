import React from "react";
import navCss from './nav.module.css'
import {NavLink} from "react-router-dom";
import iconUsers from "../../assets/users-solid.svg";
import iconProfile from "../../assets/user-alt-solid.svg"
import iconMusik from "../../assets/music-solid.svg"
import iconMessage from "../../assets/comments-regular.svg"
import iconNews from "../../assets/newspaper-regular.svg"



function Nav() {
 return(

<nav className={navCss.nav}>

    <div className={navCss.item}><NavLink activeClassName={navCss.active} to='/Profile'>Profile</NavLink>
        <img src={iconProfile}/>
    </div>
    <div className={navCss.item}><NavLink activeClassName={navCss.active} to='/Dialogs'>Messages</NavLink>
        <img src={iconMessage}/>
    </div>

    <div className={navCss.item}><NavLink activeClassName={navCss.active} to='/News'>News</NavLink>
        <img src={iconNews}/>
    </div>
    <div className={navCss.item}><NavLink activeClassName={navCss.active} to='/Music'>Music</NavLink>
        <img src={iconMusik}/>
    </div>
    <div className={navCss.item}><NavLink activeClassName={navCss.active} to='/Users'>Users</NavLink>
        <img src={iconUsers}/>
    </div>

</nav>
 )};
export default Nav;