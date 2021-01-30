import React from 'react';
import {connect, } from "react-redux";
import store, {RootState} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import { dialogsDataType, messagesDataType } from '../../types/typesOfReducersState';




type mapStateToPropsType = {
    dialogsData: dialogsDataType[],
    messagesData: messagesDataType[]
}
type mapDispatchToProps = {

}
type OwnPropsType = {

}

let mapStateToProps = (state: RootState):mapStateToPropsType => {
    return {
        dialogsData:state.dialogsPage.dialogsData,
        messagesData:state.dialogsPage.messagesData,
    }
}




export default compose(connect<mapStateToPropsType,mapDispatchToProps,OwnPropsType,RootState>
                                (mapStateToProps, {}), withAuthRedirect)
                                                       (Dialogs) as React.ComponentType;
