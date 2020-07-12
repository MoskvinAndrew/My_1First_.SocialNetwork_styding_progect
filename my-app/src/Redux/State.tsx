import {v1} from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_LIKE = "ADD-LIKE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


export type messagesDataType = {
    id:string,
    text:string,

}
export type dialogsDataType = {
    id:string,
    name:string,
    ava:string,
}
export type postsDataType = {
    id:string,
    message:string,
    likes:number,
}

export type profilePageType = {
    postsData:Array<postsDataType>
    newPostText:string,
}
export type dialogsPageType = {
    messagesData:Array<messagesDataType>
    dialogsData:Array<dialogsDataType>
    newMessageBody:string,
}
type sidebarType = {}

export type rootStateType = {
    profilePage:profilePageType,
    dialogsPage:dialogsPageType,
    sidebar:sidebarType,

}

export type StoreType = {
    _state: rootStateType
    getState: ()=> rootStateType
    _callSubscriber: (state: rootStateType) => void
    subscribe: (observer: (state: rootStateType)=> void) => void
    dispatch:(action:any)=>void,

}


let store:StoreType = {
    _state:{

    profilePage: {
        newPostText:"",
        postsData: [
            {id:v1(), message: 'How are you?', likes:12},
            {id:v1(), message: 'My name is Andrew', likes:7},
            {id:v1(), message: 'How are you?', likes:12},
            {id:v1(), message: 'How are you?', likes:12},
            {id:v1(), message: 'My name is Andrew', likes:777}
        ]
    },
    dialogsPage: {
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
    },
    sidebar: {}
},

    _callSubscriber(){
        console.log('fdfdd')
    },

    getState(){
        return this._state
    },

    subscribe  (observer:any){
        this._callSubscriber = observer;
    },


    dispatch(action){
if(action.type === ADD_POST){
    let newPost:postsDataType={id:v1(),message:this._state.profilePage.newPostText,likes:0};
    this._state.profilePage.postsData.unshift(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
}

else if(action.type===UPDATE_NEW_POST_TEXT){
    this._state.profilePage.newPostText = action.text;
    this._callSubscriber(this._state);
}

else if(action.type === ADD_LIKE){
    let f = this._state.profilePage.postsData.find(f=>f.id == action.id);/*попытка изменять лайки*/
    if(f){
        (f.likes) = (f.likes)+1;
        console.log(f.likes);
        this._callSubscriber(this._state);
    }
    return
}
else if(action.type === UPDATE_NEW_MESSAGE_BODY){
  this._state.dialogsPage.newMessageBody = action.body;
  this._callSubscriber(this._state);

}
else if(action.type === SEND_MESSAGE){
    this._state.dialogsPage.messagesData.push({id:v1(), text:this._state.dialogsPage.newMessageBody});
    this._state.dialogsPage.newMessageBody = "555";
    this._callSubscriber(this._state);


}

    }
}
export const addNewPostActionCreator = ()=> ({type:ADD_POST});
export const newTextAreaValueActionCreator = (textNew:string) =>({type:UPDATE_NEW_POST_TEXT, text: textNew});
export const onLikeActionCreator = (id:string)=> ({type:ADD_LIKE,id:id});
export const updateNewMessageBodyCreator =(body:string)=>({type:UPDATE_NEW_MESSAGE_BODY,body:body});
export const sendMessageCreator =()=>({type:SEND_MESSAGE});





export default store;


