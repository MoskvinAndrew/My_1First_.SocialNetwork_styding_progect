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
         return {...state,newMessageBody:action.body}     //сразу выводим в returnE для того чтобы не создавать переменную
        case SEND_MESSAGE:
            let copyState = {...state};    //создаем переменную и копируем стейт в нее и добавляем новый элемент в массив
                                           // (другой способ)
            copyState.messagesData = [...state.messagesData,{id: v1(), text: copyState.newMessageBody}];
            copyState.newMessageBody = "";
            return copyState;
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