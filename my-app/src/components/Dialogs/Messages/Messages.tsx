import S from "../dialogs.module.css";
import React from "react";
import {messagesDataType} from "../../../Redux/Store"


type MessagesType = {
    text: string,
    id: string,
    messagesData:Array<messagesDataType>
}


function Messages(props: MessagesType) {
    return (<div key={props.id} className={S.message}>
        {props.text}
    </div>)
}

export default Messages;