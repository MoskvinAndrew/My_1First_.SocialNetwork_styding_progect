import React from 'react';
import S from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";


type DialogsTypes = {


    dialogsData: Array<DialogsTypes>,
    messagesData: Array<DialogsTypes>,
};


let dialogsData = [
    {id: '1', name: 'Dima'},
    {id: '2', name: 'Andrew'},
    {id: '3', name: 'Kostya'},
    {id: '4', name: 'Lexa'}

];
let messagesData = [
    {id: '1', text: 'Hello'},
    {id: '2', text: 'Hello'},
    {id: '3', text: 'Petya'},
    {id: '4', text: 'Goodbye'}
];


function Dialogs() {

    let dialogsArrayNew = dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesArrayNew = messagesData.map(m => <Messages id={m.id} text={m.text}/>)

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