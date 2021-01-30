import {v1} from "uuid";
import {messagesDataType, dialogsDataType} from "../types/typesOfReducersState";


const SEND_MESSAGE = "dialogsReducer/SEND_MESSAGE";

export type sendMessageACType = {
    type: typeof SEND_MESSAGE,
    newMessage:string

};
type ActionsTypes = sendMessageACType


export type dialogsPageType = typeof initialState


let initialState = {
    dialogsData: [
        {id:v1(), name: 'Dima', ava: "https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg"},
        {id:v1(), name: 'Andrew', ava: "https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg"},
        {id:v1(), name: 'Kostya', ava: "https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg"},
        {id:v1(), name: 'Lexa', ava: "https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg"}

    ] as Array<dialogsDataType>,
    messagesData: [
        {id:v1(), text: 'Hello'},
        {id:v1(), text: 'Hello'},
        {id:v1(), text: 'Petya'},
        {id:v1(), text: 'Goodbye'}
    ] as Array<messagesDataType>,

}





const dialogsReducer=(state:dialogsPageType = initialState,action:ActionsTypes):dialogsPageType => {
    switch (action.type) {

        case SEND_MESSAGE:
            let copyState = {...state};
            copyState.messagesData = [...state.messagesData,{id: v1(), text: action.newMessage}];

            return copyState;
        default:return state;
    }
}
export const sendMessageAC =(newMessage:string):sendMessageACType=>({type:SEND_MESSAGE,newMessage});

export default dialogsReducer;


