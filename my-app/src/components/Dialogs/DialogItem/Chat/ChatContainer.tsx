import React, {useState} from "react";
import {sendMessageCreator} from "../../../../Redux/dialogs-reducer";
import Chat from "./Chat";
import  {RootState, StoreReduxType} from "../../../../Redux/redux-store";
import {connect} from "react-redux";





let mapStateToProps = (state: RootState)=>{
    return{
        messagesData:state.dialogsPage.messagesData,

    }
}
 let mapDispatchToProps=(dispatch:any)=>{
    return{

        onSendMessageClick: (newMessage:string)=>{
            dispatch(sendMessageCreator(newMessage));

        }
    }
 }


const ChatContainer = connect(mapStateToProps,mapDispatchToProps)(Chat)

export default ChatContainer;