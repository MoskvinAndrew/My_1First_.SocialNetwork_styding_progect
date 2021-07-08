import {CommonThunkType, InferActionsType, RootState} from "../redux-store";
import {chatApi, ChatMessageAPIType, StatusType} from "../../api/chat-api";
import {Dispatch} from "redux";
import {v1} from "uuid";

export type initialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>;
export type ThunkType = CommonThunkType<ActionsType>
export type ChatMessageType = ChatMessageAPIType & {id:string}

let initialState = {
    messages: [] as ChatMessageType[],
    status: "pending" as StatusType
}


const chatReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case 'chatReducer/MESSAGES_RECEIVED':
            return {...state, messages:
                    [...state.messages,...action.payload.messages.map((m)=>m = {...m,id: v1()})].filter
                    ((m,index,array)=> index >= array.length - 15 )};
        case 'chatReducer/STATUS_CHANGING':
            return {...state, status: action.payload.status};
        default:
            return state;

    }
}

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({type: 'chatReducer/MESSAGES_RECEIVED', payload: {messages}} as const),
    statusOfSocketConnection: (status:StatusType) => ({type: 'chatReducer/STATUS_CHANGING', payload: {status}} as const)
}

let _newMessageHandler:((messages:ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch:Dispatch)=> {
    if(_newMessageHandler == null){
        return _newMessageHandler = (messages:ChatMessageType[]) => {
            dispatch(actions.messagesReceived(messages))}
    }
    return _newMessageHandler
}


let _statusChangedHandler:((status:StatusType) => void) | null = null

const statusChangedHandlerCreator = (dispatch:Dispatch)=> {
    if(_statusChangedHandler == null){
        return _statusChangedHandler = (status:StatusType) => {
            dispatch(actions.statusOfSocketConnection(status))}
    }
    return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.start()
    chatApi.subscribe("messages-received", newMessageHandlerCreator(dispatch))
    chatApi.subscribe("status-changed", statusChangedHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.unsubscribe("messages-received", newMessageHandlerCreator(dispatch))
    chatApi.unsubscribe("status-changed",statusChangedHandlerCreator(dispatch) )
    chatApi.stop()
}
export const sendMessage = (message:string): ThunkType => async (dispatch) => {
    chatApi.sendMessage(message)
}

export default chatReducer