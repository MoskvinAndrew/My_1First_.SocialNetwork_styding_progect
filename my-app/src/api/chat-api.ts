import {ChatMessageType} from "../Redux/chatReducer/chat-reducer";

let subscribers ={
    'messages-received':[] as messagesReceivedSubscriberType[],
    'status-changed':[] as statusChangedSubscriberType[]
}

type messagesReceivedSubscriberType = (messages: ChatMessageType[])=>void
type statusChangedSubscriberType = (status: StatusType)=>void


let ws:WebSocket|null = null

type eventNamesTypes = 'messages-received'|'status-changed'

export const closeHandler = () =>{
    notifySubscribersAboutStatus("pending")
    setTimeout(createChannel,2000)
};
export const onMessageHandler = (e:MessageEvent)=>{
    const newMessages = JSON.parse(e.data);
    subscribers["messages-received"].forEach(s=> s(newMessages))
};

const cleanUp = () =>{
    ws?.removeEventListener('close',closeHandler)
    ws?.removeEventListener('message',onMessageHandler)
    ws?.removeEventListener('error',errorHandler)
    ws?.removeEventListener('open',openHandler)
}
const notifySubscribersAboutStatus = (status:StatusType) =>{
    subscribers["status-changed"].forEach(s => s(status))
}
const openHandler = () => {
    notifySubscribersAboutStatus("ready")
}
const errorHandler = () => {
    notifySubscribersAboutStatus("error")
    console.error("RESTART PAGE")
}


export function createChannel(){
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('message',onMessageHandler)
    ws.addEventListener('close',closeHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}

export const chatApi = {
    start(){
        createChannel()
    },
    stop(){
        ws?.close();
        cleanUp()
        subscribers["messages-received"] = []
        subscribers["status-changed"] = []
    },


    subscribe(eventName:eventNamesTypes,callback:messagesReceivedSubscriberType|statusChangedSubscriberType){
    // @ts-ignore
        subscribers[eventName].push(callback)

        return()=>{
        // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s=> s !== callback)
        }
    },
    unsubscribe(eventName:eventNamesTypes,callback:messagesReceivedSubscriberType|statusChangedSubscriberType){
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s=> s !== callback)
    },
    sendMessage(message:string){
        ws?.send(message)
    }
}




export type ChatMessageAPIType = {
    userId:number
    message:string
    userName:string
    photo:string
};
export type StatusType = "pending" | "ready"| "error"