import {v1} from "uuid";
import {dialogsPageType} from "./Store";


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

}

const dialogsReducer=(state:dialogsPageType = initialState,action:any)=> {
    switch (action.type) {

        case SEND_MESSAGE:
            let copyState = {...state};
            copyState.messagesData = [...state.messagesData,{id: v1(), text: action.newMessage}];

            return copyState;
        default:return state;
    }
}
export const sendMessageCreator =(newMessage:string)=>({type:SEND_MESSAGE,newMessage});

export default dialogsReducer;