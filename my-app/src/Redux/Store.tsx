




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





export type sidebarType = {}

export type rootStateType = {
    // profilePage:profilePageType,
    // dialogsPage:dialogsPageType,
    sidebar:sidebarType,
    // usersPage:usersPageType,

}

export type StoreType = {
    _state: rootStateType
    getState: ()=> rootStateType
    _callSubscriber: (state: rootStateType) => void
    subscribe: (observer: (state: rootStateType)=> void) => void
    dispatch:(action:any)=>void,

}


