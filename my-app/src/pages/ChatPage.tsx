import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    ChatMessageType,
    sendMessage,
    startMessagesListening,
    stopMessagesListening
} from "../Redux/chatReducer/chat-reducer";
import {RootState} from "../Redux/redux-store";
import {StatusType} from "../api/chat-api";




const ChatPage: React.FC = () => {

    return <div>
        <Chat/>
    </div>
}

export const Chat: React.FC = () => {
    // let [wsChannel, setWsChannel] = useState<WebSocket | null>(null)
    // useEffect(() => {
    //     let ws: WebSocket;
    //     const closeHandler = () => {
    //         console.log('connection was terminated')
    //         setTimeout(createChanel, 3000)
    //     }
    //
    //     function createChanel() {
    //
    //         ws?.removeEventListener('close', closeHandler)
    //         ws?.close()
    //
    //         ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    //         ws.addEventListener('close', closeHandler)
    //         setWsChannel(ws)
    //
    //     }
    //
    //     createChanel();
    //     return () => {
    //         ws.removeEventListener('close', closeHandler)
    //         ws.close()
    //     }
    //
    // }, [])

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])


    console.log('Chat rendered')
    return <div>
        <Messages/>
        <AddMessageForm/>
    </div>
}


export const AddMessageForm: React.FC<{}> = ({}) => {
    let [message, setMessage] = useState('')
    const status = useSelector<RootState, StatusType>(state => state.chat.status)
    const dispatch = useDispatch();
    console.log(status)


    const onClickHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
    }
    return <div>
        <textarea style={{}} onChange={(e) => setMessage(e.currentTarget.value)}/>
        <button disabled={status !== "ready"} onClick={onClickHandler}>SEND</button>
    </div>
}


export const Messages: React.FC<{}> = ({}) => {

    let messages = useSelector((state: RootState) => state.chat.messages);
    const messageAncorRef = useRef<HTMLDivElement>(null);
    let [isAutoScroll,setIsAutoScroll] = useState<boolean>(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        let element = e.currentTarget
        if(Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300){
            !isAutoScroll && setIsAutoScroll(true)
        }else{
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
       if(isAutoScroll){
            messageAncorRef.current?.scrollIntoView({behavior: "smooth"})
        }

    }, [messages])

    return <div style={{height: '400px', overflow: 'auto'}} onScroll={scrollHandler}>
        {messages.map((m: any, index) => <Message key={m.id} message={m}/>)}
        <div ref={messageAncorRef}></div>
    </div>
}


export const Message: React.FC<{ message: ChatMessageType }> = React.memo(({message}) => {
    console.log(">>>>>>>message")
    return <div>
        <img
            style={{width: '40px'}}
            src={message.photo ? message.photo : 'https://via.placeholder.com/40'}
        />
        <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
})
export default ChatPage;
