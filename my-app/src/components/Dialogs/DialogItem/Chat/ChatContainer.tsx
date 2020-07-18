import React, {ChangeEvent} from "react";
import S from "../../dialogs.module.css";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../Redux/dialogs-reduser";
import Chat from "./Chat";
import store, {StoreReduxType} from "../../../../Redux/redux-store";

type ChatTypes={
     ava?: string,
     dispatch:(action:any)=>void,
     store: StoreReduxType,
}

function ChatContainer(props:ChatTypes){


 let onNewMessage = (body:string)=> {
     props.dispatch(updateNewMessageBodyCreator(body));

 }
    let onSendMessageClick = ()=> {
     props.dispatch(sendMessageCreator());
    }


    return(

            <div className={S.messages}>
             <Chat  messagesData = {store.getState().dialogsReducer.messagesData}
                    onNewMessage={onNewMessage}
                   onSendMessageClick={onSendMessageClick}/>
        </div>
    )
}
export default ChatContainer;