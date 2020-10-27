import {v1} from "uuid";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";





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
export type locationDataType ={
    city:string,
    country:string,
}
export type usersDataType = {
    id:number,
    followed:boolean,
    fullName:string,
    photoUrl:string,
    status:string|number,
    location:{city:string,
    country:string,}
}
export type userProfileType = {
aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}


export type profilePageType = {
    currentUserStatus:string
    postsData:Array<postsDataType>
    userProfile:userProfileType|null
}
export type dialogsPageType = {
    messagesData:Array<messagesDataType>
    dialogsData:Array<dialogsDataType>

}
export type usersPageType = {
    users:Array<usersDataType>,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    isFetching:boolean,
    disableButtons:Array<number|null>,

}
export type sidebarType = {}

export type rootStateType = {
    profilePage:profilePageType,
    dialogsPage:dialogsPageType,
    sidebar:sidebarType,
    usersPage:usersPageType,

}

export type StoreType = {
    _state: rootStateType
    getState: ()=> rootStateType
    _callSubscriber: (state: rootStateType) => void
    subscribe: (observer: (state: rootStateType)=> void) => void
    dispatch:(action:any)=>void,

}
export type odbjDataType = {
    id: number|null,
    login: string|null,
    email: string|null,
    isAuth:boolean|null,
}


export type AuthDataType = {
    data:odbjDataType,
    // messages: Array<any>,
    // isAuth:boolean,
    // isLoggedIn:boolean
}


