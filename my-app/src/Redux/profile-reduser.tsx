import {v1} from "uuid";
import {postsDataType, profilePageType, userProfileType} from "./Store";
import {ProfileAPI, usersAPI} from "../api/api";
import {setTogleFollowingProgres, unfollowAC} from "./users-reduser";
import {Dispatch} from "redux";


const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_LIKE = "ADD_LIKE";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

export type addNewPostActionCreatorType = {
    type:typeof ADD_POST
    textNew: string
};
export type newTextAreaValueActionCreatorType = {
    type:typeof UPDATE_NEW_POST_TEXT,
    textNew: string
};
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


type ActionsType = addNewPostActionCreatorType|
                   newTextAreaValueActionCreatorType|
                   onLikeActionCreatorType|
                   setUserProfileType|
                   setCurrentUserStatusType;

let initialState = {
    currentUserStatus:"",
    userProfile:null,
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
                return newState;
            }

        case SET_USER_PROFILE:
            if (action.type === "SET_USER_PROFILE"){
                return {...state, userProfile: action.userProfile}}
        case 'SET_USER_STATUS':
            if (action.type === "SET_USER_STATUS"){
            return {...state,currentUserStatus:action.userStatus}}
        default:
            return state;

    }
}

export const addNewPostActionCreator = (textNew: string):addNewPostActionCreatorType => ({type: "ADD_POST",textNew});
export const onLikeActionCreator = (id: string):onLikeActionCreatorType => ({type: "ADD_LIKE", id});
export const setUserProfile = (userProfile:userProfileType):setUserProfileType =>({type:"SET_USER_PROFILE",userProfile});
export const setCurrentUserStatus = (userStatus:string):setCurrentUserStatusType =>({type:'SET_USER_STATUS',userStatus});


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

            // .catch(error =>{
            //     console.error(error.message)
            // })
    }};


export default profileReducer;