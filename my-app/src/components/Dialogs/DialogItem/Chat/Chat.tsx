import React, {ChangeEvent, useState} from "react";
import S from "../../dialogs.module.css";
import {messagesDataType} from "../../../../Redux/Store";
import Messages from "../../Messages/Messages";
import store, {RootState} from "../../../../Redux/redux-store";
import {Field} from "redux-form";
import {MessageReduxForm} from "../MessagesForm/messagesForm";
import {useSelector} from "react-redux";

type ChatTypes={
     ava?: string,
    messagesData: Array<messagesDataType>,
    onSendMessageClick:(newMessage:string)=>void,
}

function Chat(props:ChatTypes){


 let SendMessageClick = (values:any)=> {
     props.onSendMessageClick(values.textarea);

 };


 let messagesArrayNew = props.messagesData.map(m => <Messages key= {m.id} id={m.id} text={m.text} messagesData={props.messagesData}/>)
    return(
        <div>
            <div className={S.messages}>
                {messagesArrayNew}
            </div>
            <img className={S.avatar} src={props.ava}/>
            <MessageReduxForm onSubmit={SendMessageClick }/>
        </div>
    )
}
export default Chat;