import React, {ChangeEvent} from "react";
import S from "../../dialogs.module.css";
import {messagesDataType} from "../../../../Redux/Store";
import Messages from "../../Messages/Messages";

type ChatTypes={
     ava?: string,
    messagesData: Array<messagesDataType>,
    onNewMessage:(body:string)=>void,
    onSendMessageClick:()=>void,
}

function Chat(props:ChatTypes){


 let NewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>)=> {
     let body = e.target.value;
     console.log(body);
     props.onNewMessage(body);


 }
    let SendMessageClick = ()=> {
        props.onSendMessageClick();

    }

    let messagesArrayNew = props.messagesData.map(m => <Messages key= {m.id} id={m.id} text={m.text} messagesData={props.messagesData}/>)
    return(
        <div>
            <div className={S.messages}>
                {messagesArrayNew}
            </div>
            <img className={S.avatar} src={props.ava}/>
            <div><textarea onChange={NewMessageChange} ></textarea></div>
            <div><button onClick={SendMessageClick}>Send</button></div>
        </div>
    )
}
export default Chat;