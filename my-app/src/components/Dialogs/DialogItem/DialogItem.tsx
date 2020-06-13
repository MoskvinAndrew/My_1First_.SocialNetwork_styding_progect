import S from "../dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


type DialogItemT = {
    name: string,
    id: number,

}


function DialogItem(props: DialogItemT) {
    return (<div className={S.dialog}>< NavLink to={'/dialog' + `/` + (props.id)}>
        {props.name}
    </NavLink></div>)
}

export default DialogItem;