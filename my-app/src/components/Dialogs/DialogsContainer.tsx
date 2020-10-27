import React, {useReducer} from 'react';
import {connect, useSelector} from "react-redux";
import store, {RootState, StoreReduxType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {dialogsDataType, messagesDataType} from "../../Redux/Store";


type mapStateToPropsType = {
    dialogsData: dialogsDataType[],
    messagesData: messagesDataType[]
}

let mapStateToProps = (state: RootState):mapStateToPropsType => {
    return {
        dialogsData:state.dialogsPage.dialogsData,
        messagesData:state.dialogsPage.messagesData,
    }
}




export default compose
(connect(mapStateToProps, {}),
    withAuthRedirect)
(Dialogs) as React.ComponentType;
