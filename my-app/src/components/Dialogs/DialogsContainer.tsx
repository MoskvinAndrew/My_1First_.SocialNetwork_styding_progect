import React, {useReducer} from 'react';
import S from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import { dialogsDataType,messagesDataType} from "../../Redux/Store";
import Dialogs from "./Dialogs";
import dialogsReducer from "../../Redux/dialogs-reduser";
import {useSelector} from "react-redux";
import store, {StoreReduxType} from "../../Redux/redux-store";




function DialogsContainer() {
    const dialogsDataC = useSelector<StoreReduxType, Array<dialogsDataType>>(state=>store.getState().dialogsPage.dialogsData);
    const messagesDataC = useSelector<StoreReduxType, Array<messagesDataType>>(state=>store.getState().dialogsPage.messagesData);

    return <Dialogs messagesData={messagesDataC}
    dialogsData={dialogsDataC}/>
}


export default DialogsContainer;