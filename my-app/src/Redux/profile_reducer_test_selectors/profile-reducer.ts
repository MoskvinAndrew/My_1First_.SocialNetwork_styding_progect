import {v1} from "uuid";
import {Dispatch} from "redux";
import {ProfileDataFormValuesType} from "../../components/Profile/ProfileInfo/ProfileEditForm/ProfileForm";
import {userProfileType, photosType, postsDataType} from "../../types/typesOfReducersState";
import {CommonThunkType, InferActionsType, RootState} from "../redux-store";
import { ProfileAPI } from "../../api/ProfileAPI";


type ActionsType = InferActionsType<typeof actions>;
type ThunkType = CommonThunkType<ActionsType>

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
        case 'profileReducer/ADD_POST':
            return {...state, postsData: [ {id: v1(), message: action.textNew, likes: 0},...state.postsData]};
        case 'profileReducer/ADD_LIKE':
            return {...state,postsData: [...state.postsData.map(el=>el.id === action.id ? {...el,likes:el.likes+1} : {...el})]};

            // let newState = {...state};
            // newState.postsData = [...state.postsData];
            // let f = newState.postsData.find(f => f.id == action.id);
            // if(f){
            //     f.likes++
            // }
            // return newState;

        case 'profileReducer/SET_USER_PROFILE':
            return {...state, userProfile:action.userProfile };
        case 'profileReducer/SET_USER_STATUS':
            return {...state,currentUserStatus:action.userStatus};

        case 'profileReducer/SET_AVATAR_PHOTO':

               return   {...state,userProfile:{...state.userProfile,photos:action.photos} as userProfileType}
             // return {...state,userProfile:{...state.userProfile,photos:{...state.userProfile.photos,large:action.photo}}}
        default:
            return state;

    }
}
export let actions = {

     addNewPostActionCreator: (textNew: string) => ({type: 'profileReducer/ADD_POST', textNew} as const ),

     onLikeActionCreator: (id: string) => ({type: 'profileReducer/ADD_LIKE', id}as const),

     setUserProfile: (userProfile: userProfileType) => ({
        type: 'profileReducer/SET_USER_PROFILE',
        userProfile
    }as const),

    setCurrentUserStatus: (userStatus: string | null) => ({
        type: 'profileReducer/SET_USER_STATUS',
        userStatus
    }as const),

    savePhotoSuccess: (photos: photosType) => ({type: 'profileReducer/SET_AVATAR_PHOTO', photos}as const)
}

export const getUserProfileTC = (userId:number):ThunkType => {
    return async (dispatch)=>{
        let response = await  ProfileAPI.userIdProfile(userId);
        dispatch(actions.setUserProfile(response));

    }};



export const putUserStatusTC = (userCurrentStatus:string):ThunkType => {
    return async (dispatch) => {
            await ProfileAPI.statusPut(userCurrentStatus)
        }

};
export const getUserStatusTC = (userId:number):ThunkType => {
    return async (dispatch)=>{
      let response = await ProfileAPI.statusGet(userId)
        dispatch(actions.setCurrentUserStatus(response));

    }};

export const saveAvatarTC = (photoFile:File):ThunkType => {
    return async (dispatch)=>{
        let data = await ProfileAPI.setAvatar(photoFile);
        if(data.resultCode === 0) {
            dispatch(actions.savePhotoSuccess(data.data));
        }

    }
};
export const updateProfileInformationTC = (values:ProfileDataFormValuesType,userId:number):ThunkType => {
    return async (dispatch) => {
    let response = await ProfileAPI.updateUserInformation(values);
        if(response.resultCode === 0) {
            dispatch(getUserProfileTC(userId));
        }
    }
}


export default profileReducer;