import {AuthDataType, odbjDataType, postsDataType, profilePageType} from "./Store";
import {AuthAPI, loginParamsType, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";



const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const SET_AUTH_RESULT_CODE = 'SET_AUTH_RESULT_CODE';
const SET_IS_LOGGIN = 'SET_IS_LOGGIN';

export type setAuthUserDataType = {
    type:typeof SET_USER_AUTH_DATA,
    data:odbjDataType,
}
export type setAuthResultCodeType = {
    type:typeof SET_AUTH_RESULT_CODE,
    isAuth:boolean,
}
export type setIsLoggedInType = {
    type:typeof SET_IS_LOGGIN,
    isLoggin:boolean,
}

let initialState = {
    data:{
        id: null,
        email: null,
        login: null,
        isAuth: false,

    },

}

type ActionsType = setAuthUserDataType|setAuthResultCodeType|setIsLoggedInType

const authReducer = (state: AuthDataType = initialState, action: ActionsType) => {

    switch (action.type) {

        case SET_USER_AUTH_DATA:
            return {...state, data:action.data};

       case SET_IS_LOGGIN:
            return {...state,isLoggedIn:action.isLoggin}

          default:
            return state;

    }
}
export const setAuthUserData = (id:number|null,email:string|null,login:string|null,isAuth:boolean):setAuthUserDataType =>({type:'SET_USER_AUTH_DATA',data:{id,email,login,isAuth}});

export const AuthMeThunk = () =>(dispatch:Dispatch)=>{
       return AuthAPI.me().then((response) => {
            if(response.resultCode === 0) {
                dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login, true));
            }})

    };

export const LoginTC = (email:string,password:string,rememberMe:boolean) =>(dispatch:Dispatch) =>{
        AuthAPI.login(email,password,rememberMe)
            .then(response=>{
                if(response.data.resultCode === 0){
                    // @ts-ignore
                    dispatch(AuthMeThunk());
                }else{

                  let message = response.data.messages.length > 0?response.data.messages:"Some error"
                      dispatch(stopSubmit('login',{_error:message}))
                }
            })
            .catch(error=>{
                alert('some error occur')
                })};

export const LogOutTC = () =>(dispatch:Dispatch) =>{
        AuthAPI.logOut()
            .then(response=>{
                if(response.data.resultCode === 0){
                   dispatch(setAuthUserData(null,null,null,false));
                 }
            })
            .catch(error=>{
                alert('some error occur')
            })}

export default authReducer;