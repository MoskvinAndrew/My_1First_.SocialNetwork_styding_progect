import {v1} from "uuid";
import {messagesDataType, dialogsDataType} from "../../types/typesOfReducersState";
import {InferActionsType} from "../redux-store";


type ActionsType = InferActionsType<typeof actions>
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

const dialogsReducer=(state:dialogsPageType = initialState,action:ActionsType):dialogsPageType => {
    switch (action.type) {
        case "dialogsReducer/SEND_MESSAGE":
            let copyState = {...state};
            copyState.messagesData = [...state.messagesData,{id: v1(), text: action.newMessage}];

            return copyState;
        default:return state;
    }
}

export let actions = {
    sendMessageAC: (newMessage: string)=> ({
        type: "dialogsReducer/SEND_MESSAGE",
        newMessage
    } as const )
}
export default dialogsReducer;


