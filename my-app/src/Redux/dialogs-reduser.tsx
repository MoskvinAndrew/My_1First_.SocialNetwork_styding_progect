import {v1} from "uuid";
import {dialogsPageType} from "./Store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogsData: [
        {id:v1(), name: 'Dima', ava: "https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg"},
        {id:v1(), name: 'Andrew', ava: "https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg"},
        {id:v1(), name: 'Kostya', ava: "https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg"},
        {id:v1(), name: 'Lexa', ava: "https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg"}

    ],
    messagesData: [
        {id:v1(), text: 'Hello'},
        {id:v1(), text: 'Hello'},
        {id:v1(), text: 'Petya'},
        {id:v1(), text: 'Goodbye'}
    ],
    newMessageBody: "",
}

const dialogsReducer=(state:dialogsPageType = initialState,action:any)=> {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            state.messagesData.push({id: v1(), text: state.newMessageBody});
            state.newMessageBody = "";
            return state;
        default:return state;
    }



}
type UpdateNewMessageBodyCreatorType = {
    type: typeof  UPDATE_NEW_MESSAGE_BODY
    body: string
}

export const updateNewMessageBodyCreator =(body:string): UpdateNewMessageBodyCreatorType=>({type:UPDATE_NEW_MESSAGE_BODY,body:body});
export const sendMessageCreator =()=>({type:SEND_MESSAGE});

export default dialogsReducer;