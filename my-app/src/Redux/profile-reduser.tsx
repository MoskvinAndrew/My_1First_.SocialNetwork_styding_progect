import {v1} from "uuid";
import {postsDataType, profilePageType, userProfileType} from "./Store";
import {ProfileAPI, securityAPI, usersAPI} from "../api/api";
import {setTogleFollowingProgres, unfollowAC} from "./users-reduser";
import {Dispatch} from "redux";
import {ProfileDataFormValuesType} from "../components/Profile/ProfileInfo/ProfileEditForm/ProfileForm";
import authReducer from "./auth-reducer";
import store, {RootState} from "./redux-store";



const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_LIKE = "ADD_LIKE";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_AVATAR_PHOTO = 'SET_AVATAR_PHOTO';
const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';

export type addNewPostActionCreatorType = {
    type:typeof ADD_POST
    textNew: string
};
// export type newTextAreaValueActionCreatorType = {
//     type:typeof UPDATE_NEW_POST_TEXT,
//     textNew: string
// };
export type onLikeActionCreatorType = {
    type:typeof ADD_LIKE,
    id: string
};
export type setUserProfileType = {
    type:typeof SET_USER_PROFILE,
    userProfile:userProfileType

};
export type setCurrentUserStatusType = {
    type:typeof SET_USER_STATUS,
    userStatus:string
}
export type savePhotoSuccessType = {
    type: typeof SET_AVATAR_PHOTO,
    photo: string
}



type ActionsType = addNewPostActionCreatorType|
                   // newTextAreaValueActionCreatorType|
                   onLikeActionCreatorType|
                   setUserProfileType|
                   setCurrentUserStatusType|
                   savePhotoSuccessType;

let initialState = {
    currentUserStatus:"",

    userProfile: {
        aboutMe: "",
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 0,
        photos: {
            small: "",
            large: ""
        }
    },
    postsData: [
        {id: v1(), message: 'How are you?', likes: 12},
        {id: v1(), message: 'My name is Andrew', likes: 7},
        {id: v1(), message: 'How are you?', likes: 12},
        {id: v1(), message: 'How are you?', likes: 12},
        {id: v1(), message: 'My name is Andrew', likes: 777}
    ]
}


const profileReducer = (state: profilePageType = initialState, action: ActionsType) => {

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
            debugger
            return {...state, userProfile:action.userProfile }
        case SET_USER_STATUS:
            return {...state,currentUserStatus:action.userStatus}

        case SET_AVATAR_PHOTO:

            // return {...state,userProfile:{...state.userProfile,photos:action.photo}}
            return {...state,userProfile:{...state.userProfile,photos:{...state.userProfile.photos,large:action.photo}}}


        default:
            return state;

    }
}

export const addNewPostActionCreator = (textNew: string):addNewPostActionCreatorType => ({type: ADD_POST,textNew});
export const onLikeActionCreator = (id: string):onLikeActionCreatorType => ({type: ADD_LIKE, id});
export const setUserProfile = (userProfile:userProfileType):setUserProfileType =>({type:SET_USER_PROFILE,userProfile});
export const setCurrentUserStatus = (userStatus:string):setCurrentUserStatusType =>({type:SET_USER_STATUS,userStatus});
export const savePhotoSuccess = (photo:string):savePhotoSuccessType =>({type:SET_AVATAR_PHOTO,photo});
export const updateUserProfileData = (newData:any)=>({type:UPDATE_USER_PROFILE,newData})


export const getUserProfileTC = (userId:number) => {
    return async (dispatch:Dispatch)=>{
        let response = await  ProfileAPI.userIdProfile(userId)
        dispatch(setUserProfile(response));
        console.log(response);
    }};



export const putUserStatusTC = ( userCurrentStatus:string) => {
    return async (dispatch:Dispatch)=>{
      let response = await ProfileAPI.statusPut(userCurrentStatus)
          .catch(error =>{
                console.error(error.message)
            })
    }};
export const getUserStatusTC = (userId:number) => {
    return async (dispatch:Dispatch)=>{
      let response = await ProfileAPI.statusGet(userId)
        dispatch(setCurrentUserStatus(response.data));

    }};

export const saveAvatarTC = (photoFile:any) => {
    return async (dispatch:Dispatch)=>{
        let response = await ProfileAPI.setAvatar(photoFile);
        if(response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos.large));
        }

    }
};
export const updateProfileInformationTC = (values:ProfileDataFormValuesType,userId:number) => {
debugger
    return async (dispatch:Dispatch) => {
    let response = await ProfileAPI.updateUserInformation(values);
        if(response.data.resultCode === 0) {
            // @ts-ignore
            dispatch(getUserProfileTC(userId));
        }
    }
}


export default profileReducer;