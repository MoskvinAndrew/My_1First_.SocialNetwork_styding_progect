import React from 'react';
import S from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {indexTT, indexTTT} from "../../index";


type DialogsTypes = {
    dialogsData: Array<indexTT>,
    messagesData: Array<indexTTT>,
};

function Dialogs(props:DialogsTypes) {


    let dialogsArrayNew = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesArrayNew = props.messagesData.map(m => <Messages id={m.id} text={m.text}/>)

    return (
        <div className={S.dialogs}>
            <div className={S.dialogsItems}>
                {dialogsArrayNew}
            </div>
            <div className={S.messages}>
                {messagesArrayNew}
            </div>
        </div>)
}


export default Dialogs;