import React, {ChangeEvent} from "react";
import S from "../../dialogs.module.css";
import {messagesDataType, sendMessageCreator, updateNewMessageBodyCreator} from "../../../../Redux/State";
import Messages from "../../Messages/Messages";

type ChatTypes={
     ava?: string,
     dispatch:(action:any)=>void,
     messagesData: Array<messagesDataType>,
}

function Chat(props:ChatTypes){


 let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>)=> {
     let body = e.target.value;
     props.dispatch(updateNewMessageBodyCreator(body));

 }
    let onSendMessageClick = ()=> {
     props.dispatch(sendMessageCreator());
    }

    let messagesArrayNew = props.messagesData.map(m => <Messages key= {m.id} id={m.id} text={m.text} messagesData={props.messagesData}/>)
    return(
        <div>
            <div className={S.messages}>
                {messagesArrayNew}
            </div>
            <img className={S.avatar} src={props.ava}/>
            <div><textarea onChange={onNewMessageChange} ></textarea></div>
            <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
    )
}
export default Chat;