import React from 'react';
import S from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import { dialogsDataType,messagesDataType} from "../../Redux/Store";



type DialogsType = {
    dialogsData: Array<dialogsDataType>,
    messagesData: Array<messagesDataType>,

};

function Dialogs(props:DialogsType) {


    let dialogsArrayNew = props.dialogsData.map(d => <DialogItem   key= {d.id} id={d.id} ava={d.ava} name={d.name} />)
    return (

        <div className={S.dialogs}>


            <div className={S.dialogsItems}>
                {dialogsArrayNew}
            </div>


            <div className={S.messages}>

            </div>
        </div>

            )
}


export default Dialogs;