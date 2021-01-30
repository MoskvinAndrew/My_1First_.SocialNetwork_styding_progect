//usersReducerState

export type usersDataType = {
    id:number,
    followed:boolean,
    fullName:string,
    photoUrl:string,
    status:string,
    location:LocationType
}
export type LocationType = {
    city:string,
    country:string,
}

//profileReducerState

export type userProfileType = {
    aboutMe: string,
    contacts:  contactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName:string,
    userId: number,
    photos:photosType



}
export type photosType = {
    small:  string|null ,
    large: string|null
}
export type contactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}
export type postsDataType = {
    id:string,
    message:string,
    likes:number,
}

//authReducerState
export type odbjDataType = {
    id: number|null,
    login: string|null,
    email: string|null,
    isAuth:boolean,
    captchaUrl?:string|null,
}

//dialogsReducerState

export type messagesDataType = {
    id:string,
    text:string,

}
export type dialogsDataType = {
    id:string,
    name:string,
    ava:string,
}

