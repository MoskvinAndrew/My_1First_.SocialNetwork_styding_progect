import {v1} from "uuid";
import {AuthDataType, odbjDataType, postsDataType, profilePageType} from "./Store";
import {usersAPI} from "../api/api";



const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const SET_AUTH_RESULT_CODE = 'SET_AUTH_RESULT_CODE';

export type setAuthUserDataType = {
    type:typeof SET_USER_AUTH_DATA,
    data:odbjDataType,
}
export type setAuthResultCodeType = {
    type:typeof SET_AUTH_RESULT_CODE,
    resultCode:number,
}

let initialState = {
    data:{
        id: null,
        email: null,
        login: null,

    },
    messages: [],
    resultCode: 0
}

type ActionsType = setAuthUserDataType|setAuthResultCodeType

const authReducer = (state: AuthDataType = initialState, action: ActionsType) => {

    switch (action.type) {

        case SET_USER_AUTH_DATA:
            return {...state, data:action.data};

        case SET_AUTH_RESULT_CODE: {
            return{...state,resultCode:action.resultCode}

        }


            default:
            return state;

    }
}
export const setAuthUserData = (id:number,email:string,login:string):setAuthUserDataType =>({type:'SET_USER_AUTH_DATA',data:{id,email,login}});
export const setAuthResultCode = (resultCode:number):setAuthResultCodeType => ({type: 'SET_AUTH_RESULT_CODE',resultCode})

export const AuthMeThunk = () =>{

    return(dispatch:any)=>{
        usersAPI.AuthMe().then((data) => {
            // let {id,email,login} = data;
            dispatch(setAuthUserData(data.data.id,data.data.email,data.data.login));
            dispatch(setAuthResultCode(data.resultCode));
        })
    }
}


export default authReducer;