import React, {useState} from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../Redux/dialogs-reduser";
import Chat from "./Chat";
import  {RootState, StoreReduxType} from "../../../../Redux/redux-store";
import {connect} from "react-redux";




let mapStateToProps = (state: RootState)=>{
    return{
        messagesData:state.dialogsPage.messagesData,
        newMessageBody:state.dialogsPage.newMessageBody,
    }
}
 let mapDispatchToProps=(dispatch:any)=>{
    return{
        onNewMessage: (body:string)=>{
            dispatch(updateNewMessageBodyCreator(body));
        },
        onSendMessageClick: ()=>{
            dispatch(sendMessageCreator());

        }
    }
 }


const ChatContainer = connect(mapStateToProps,mapDispatchToProps)(Chat)

export default ChatContainer;