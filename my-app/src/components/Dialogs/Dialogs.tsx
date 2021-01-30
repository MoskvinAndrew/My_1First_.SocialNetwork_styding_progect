import React from 'react';
import S from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from 'react-router-dom';
import {dialogsDataType, messagesDataType} from "../../types/typesOfReducersState";



type DialogsType = {
    dialogsData: Array<dialogsDataType>,
    messagesData: Array<messagesDataType>,
    auth:number|null

};

function Dialogs(props:DialogsType) {
    if(props.auth == 1){
       return <Redirect to= '/login' />
    }
    else{


    let dialogsArrayNew = props.dialogsData.map(d => <DialogItem   key= {d.id} id={d.id} ava={d.ava} name={d.name} />);

            return (

            <div className={S.dialogs}>
            <div className={S.dialogsItems}>
            {dialogsArrayNew}
            </div>


            <div className={S.messages}>


            </div>
            </div>)



        }
}
export default Dialogs;
