import React, {useState} from "react";
import Chat from "./Chat";
import  {RootState, StoreReduxType} from "../../../../Redux/redux-store";
import {connect} from "react-redux";
import {actions} from "../../../../Redux/dialogs_reducer_test/dialogs-reducer";






let mapStateToProps = (state: RootState)=>{
    return{
        messagesData:state.dialogsPage.messagesData,

    }
}
 let mapDispatchToProps=(dispatch:any)=>{
    return{

        onSendMessageClick: (newMessage:string)=>{
            dispatch(actions.sendMessageAC(newMessage));

        }
    }
 }


const ChatContainer = connect(mapStateToProps,mapDispatchToProps)(Chat)

export default ChatContainer;