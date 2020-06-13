import S from "../dialogs.module.css";
import React from "react";


type MessagesT = {
    text: string,
    id: number,

}


function Messages(props: MessagesT) {
    return (<div key={props.id} className={S.message}>
        {props.text}
    </div>)
}

export default Messages;