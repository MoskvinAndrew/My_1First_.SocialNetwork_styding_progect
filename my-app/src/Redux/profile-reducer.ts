import {v1} from "uuid";
import {ProfileAPI} from "../api/api";
import {Dispatch} from "redux";
import {ProfileDataFormValuesType} from "../components/Profile/ProfileInfo/ProfileEditForm/ProfileForm";
import {userProfileType, photosType, postsDataType} from "../types/typesOfReducersState";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./redux-store";

const ADD_POST = "profileReducer/ADD_POST"
const ADD_LIKE = "profileReducer/ADD_LIKE"
const SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE'
const SET_USER_STATUS = 'profileReducer/SET_USER_STATUS'
const SET_AVATAR_PHOTO = 'profileReducer/SET_AVATAR_PHOTO'



export type addNewPostActionCreatorType = {
    type:typeof ADD_POST
    textNew: string
}

export type onLikeActionCreatorType = {
    type:typeof ADD_LIKE,
    id: string
}
export type setUserProfileType = {
    type:typeof SET_USER_PROFILE,
    userProfile:userProfileType

}
export type setCurrentUserStatusType = {
    type:typeof SET_USER_STATUS,
    userStatus:string|null
}
export type savePhotoSuccessType = {
    type: typeof SET_AVATAR_PHOTO,
    photos: photosType
}



type ActionsType = addNewPostActionCreatorType|
                   onLikeActionCreatorType|
                   setUserProfileType|
                   setCurrentUserStatusType|
                   savePhotoSuccessType





export type initialStateType = typeof initialState;

let initialState = {
    currentUserStatus: null as string|null ,

    userProfile: null as userProfileType|null ,

    postsData: [
        {id: v1(), message: 'How are you?', likes: 12},
        {id: v1(), message: 'My name is Andrew', likes: 7},
        {id: v1(), message: 'How are you?', likes: 12},
        {id: v1(), message: 'How are you?', likes: 12},
        {id: v1(), message: 'My name is Andrew', likes: 777}
    ] as Array<postsDataType>
}


const profileReducer = (state: initialStateType = initialState, action: ActionsType):initialStateType => {

    switch (action.type) {
        case ADD_POST:
            return {...state, postsData: [ {id: v1(), message: action.textNew, likes: 0},...state.postsData]}
        case ADD_LIKE:
            let newState = {...state};
            newState.postsData = [...state.postsData];
            let f = newState.postsData.find(f => f.id == action.id);
            if(f){
                f.likes++
            }
            return newState;

        case SET_USER_PROFILE:
            return {...state, userProfile:action.userProfile }
        case SET_USER_STATUS:
            return {...state,currentUserStatus:action.userStatus}

        case SET_AVATAR_PHOTO:

               return   {...state,userProfile:{...state.userProfile,photos:action.photos} as userProfileType}
             // return {...state,userProfile:{...state.userProfile,photos:{...state.userProfile.photos,large:action.photo}}}
        default:
            return state;

    }
}

export const addNewPostActionCreator = (textNew: string):addNewPostActionCreatorType => ({type: ADD_POST,textNew});
export const onLikeActionCreator = (id: string):onLikeActionCreatorType => ({type: ADD_LIKE, id});
export const setUserProfile = (userProfile:userProfileType):setUserProfileType =>({type:SET_USER_PROFILE,userProfile});
export const setCurrentUserStatus = (userStatus:string|null):setCurrentUserStatusType =>({type:SET_USER_STATUS,userStatus});
export const savePhotoSuccess = (photos:photosType):savePhotoSuccessType =>({type:SET_AVATAR_PHOTO,photos});

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionsType>



export const getUserProfileTC = (userId:number):ThunkType => {
    return async (dispatch)=>{
        let response = await  ProfileAPI.userIdProfile(userId);
        dispatch(setUserProfile(response));

    }};



export const putUserStatusTC = (userCurrentStatus:string):ThunkType => {
    try {
        return async (dispatch) => {
            let response = await ProfileAPI.statusPut(userCurrentStatus)
                .catch(error => {
                    console.error(error.message)
                })
        }
    }
    finally {
        console.log("finally init")
    }
};
export const getUserStatusTC = (userId:number):ThunkType => {
    return async (dispatch)=>{
      let response = await ProfileAPI.statusGet(userId)
        dispatch(setCurrentUserStatus(response.data));

    }};

export const saveAvatarTC = (photoFile:any):ThunkType => {
    return async (dispatch:Dispatch)=>{
        let response = await ProfileAPI.setAvatar(photoFile);
        if(response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos.large));
        }

    }
};
export const updateProfileInformationTC = (values:ProfileDataFormValuesType,userId:number):ThunkType => {
    return async (dispatch:Dispatch, getUserProfileTC:any) => {
    let response = await ProfileAPI.updateUserInformation(values);
        if(response.data.resultCode === 0) {
            dispatch(getUserProfileTC(userId));
        }
    }
}


export default profileReducer;