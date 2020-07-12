import React from 'react';
import S from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import { dialogsDataType,messagesDataType} from "../../Redux/State";
import {BrowserRouter, HashRouter, NavLink, Route, Switch} from "react-router-dom";
import Chat from "./DialogItem/Chat/Chat";





type DialogsType = {
    dialogsData: Array<dialogsDataType>,
    messagesData: Array<messagesDataType>,
};

function Dialogs(props:DialogsType) {


    let dialogsArrayNew = props.dialogsData.map(d => <DialogItem  key= {d.id} id={d.id} ava={d.ava} name={d.name} />)

    // let messagesArrayNew = props.messagesData.map(m => <Messages key= {m.id} id={m.id} text={m.text} messagesData={props.messagesData}/>)

    return (

        <div className={S.dialogs}>


            <div className={S.dialogsItems}>
                {dialogsArrayNew}
            </div>


            <div className={S.messages}>
                {/*{messagesArrayNew}*/}
            </div>
        </div>

            )
}


export default Dialogs;