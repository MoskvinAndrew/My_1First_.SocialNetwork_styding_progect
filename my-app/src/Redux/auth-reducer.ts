import {AuthAPI,securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {odbjDataType} from "../types/typesOfReducersState";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./redux-store";
import {ResultCodeForCaptcha, ResultCodesEnum} from "../types/typesForAuthAxiosResponse";



const SET_USER_AUTH_DATA = 'authReducer/SET_USER_AUTH_DATA';
const SET_AUTH_RESULT_CODE = 'authReducer/SET_AUTH_RESULT_CODE';
const SET_IS_LOGGIN = 'authReducer/SET_IS_LOGIN';
const  GET_CAPTCHA_URL_SUCCESS = 'authReducer/GET_CAPTCHA_URL_SUCCESS';





export type initialStateType = {
    data:odbjDataType
}




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
export type getCaptchaUrlType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    captchaUrl:string
}

let initialState = {
    data:{
        id: null as number|null,
        email: null as string|null,
        login: null as string|null,
        isAuth: false,
        captchaUrl:null as string|null

    },

}

type ActionsType = setAuthUserDataType|setAuthResultCodeType|setIsLoggedInType|getCaptchaUrlType

const authReducer = (state: initialStateType = initialState, action: ActionsType):initialStateType => {

    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {...state, data:action.data};
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state,data:{...state.data,captchaUrl:action.captchaUrl}}
          default:
            return state;

    }
}
export const setAuthUserDataAC = (id:number|null,email:string|null,login:string|null,isAuth:boolean):setAuthUserDataType =>
    ({type: SET_USER_AUTH_DATA,data:{id,email,login,isAuth}});

export const getCaptchaUrlAC = (captchaUrl:string):getCaptchaUrlType =>({
    type: GET_CAPTCHA_URL_SUCCESS,captchaUrl
} );


type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionsType>

export const AuthMeThunk = ():ThunkType => {
    return async (dispatch) => {
            let response = await AuthAPI.me()
            if (response.resultCode === ResultCodesEnum.success ) {
                dispatch(setAuthUserDataAC(response.data.id, response.data.email, response.data.login, true));
            }}}


export const LoginTC = (email:string,password:string,rememberMe:boolean = false,captcha:string):ThunkType => {
   return async (dispatch) => {
       try {
      let response = await AuthAPI.login(email,password,rememberMe,captcha)
           if(response.data.resultCode === 0){
                    dispatch(AuthMeThunk());
                }else if (response.data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                   dispatch(getCaptchaUrlTC());
           }}
           catch (response) {
               console.log(response)
               // let message = response.data.messages.length > 0?
               //     response.data.messages:"Some error"
               // dispatch(stopSubmit('login',{_error:message}))
       }
           finally {

       }}}

export const LogOutTC = ():ThunkType =>{
    return async (dispatch) =>{
       let response = await AuthAPI.logOut()
        if(response.data.resultCode === 0){
                   dispatch(setAuthUserDataAC(null,'','',false));
                 }}};


export const getCaptchaUrlTC = ():ThunkType =>  {
    return async (dispatch:Dispatch) => {
        const response = await securityAPI.getCaptchaURL();
        const captchaURL = response.data.url;
        dispatch(getCaptchaUrlAC(captchaURL))
    }}

export default authReducer