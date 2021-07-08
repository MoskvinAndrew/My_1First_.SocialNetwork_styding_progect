import {Dispatch} from "redux";
import {odbjDataType} from "../../types/typesOfReducersState";
import {ThunkAction} from "redux-thunk";
import {CommonThunkType, InferActionsType, RootState} from "../redux-store";
import {ResultCodeForCaptcha, ResultCodesEnum} from "../../types/typesForAuthAxiosResponse";
import { AuthAPI } from "../../api/AuthAPI";
import { securityAPI } from "../../api/securityAPI";

export type initialStateType = {
    data:odbjDataType
};
type ActionsType = InferActionsType<typeof actions>;
export type ThunkType = CommonThunkType<ActionsType>


let initialState = {
    data:{
        id: null as number|null,
        email: null as string|null,
        login: null as string|null,
        isAuth: false,
        captchaUrl:null as string|null

    },

}


const authReducer = (state: initialStateType = initialState, action: ActionsType):initialStateType => {

    switch (action.type) {
        case 'authReducer/SET_USER_AUTH_DATA':
            return {...state, data:action.data};
        case 'authReducer/GET_CAPTCHA_URL_SUCCESS':
            return {...state,data:{...state.data,captchaUrl:action.captchaUrl}}
          default:
            return state;

    }
}

let actions = {
    setAuthUserDataAC: (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
        ({type: 'authReducer/SET_USER_AUTH_DATA', data: {id, email, login, isAuth}}as const),
    getCaptchaUrlAC: (captchaUrl: string) => ({
        type: 'authReducer/GET_CAPTCHA_URL_SUCCESS', captchaUrl
    }as const)
}


export const AuthMeThunk = ():ThunkType => {
    return async (dispatch) => {
            let response = await AuthAPI.me()
            if (response.resultCode === ResultCodesEnum.success ) {
                dispatch(actions.setAuthUserDataAC(response.data.id, response.data.email, response.data.login, true));
            }}}


export const LoginTC = (email:string,password:string,rememberMe:boolean,captcha:string):ThunkType => {
   return async (dispatch) => {
       let response = await AuthAPI.login(email,password,rememberMe,captcha)
           if(response.data.resultCode === 0){
                    dispatch(AuthMeThunk());
                }else if (response.data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                   dispatch(getCaptchaUrlTC());
           }

           }}

export const LogOutTC = ():ThunkType =>{
    return async (dispatch) =>{
       let response = await AuthAPI.logOut()
        if(response.data.resultCode === 0){
                   dispatch(actions.setAuthUserDataAC(null,'','',false));
                 }}};


export const getCaptchaUrlTC = ():ThunkType =>  {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaURL();
        const captchaURL = response.data.url;
        dispatch(actions.getCaptchaUrlAC(captchaURL))
    }}

export default authReducer