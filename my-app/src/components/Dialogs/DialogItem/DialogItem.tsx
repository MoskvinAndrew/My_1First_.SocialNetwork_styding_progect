import S from "../dialogs.module.css";
import {HashRouter, Switch, Route, NavLink} from "react-router-dom";
import React from "react";


type DialogItemType = {
    id: string,
    name: string,
    ava: string,


}


function DialogItem(props: DialogItemType) {
    return (

        <div className={S.dialog}>

            < NavLink className={S.link} to='/Chat'>{props.name}</NavLink>
            <img className={S.avatar} src={props.ava} />

        </div>)


}

export default DialogItem;