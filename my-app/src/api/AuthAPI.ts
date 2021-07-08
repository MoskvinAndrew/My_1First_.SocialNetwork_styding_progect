import {
    loginPOSTResponseType,
    MeResponseType,
    APIResponseType,
    ResultCodeForCaptcha,
    ResultCodesEnum
} from "../types/typesForAuthAxiosResponse";
import {instanse} from "./api";





export const AuthAPI = {
    me() {
        return instanse.get<APIResponseType<MeResponseType>>(`auth/me`)
            .then(response => {
                return response.data;
            })},
    login(email:string,password:string,rememberMe:boolean,captcha:string|null = null ) {
        return instanse.post<APIResponseType<loginPOSTResponseType,ResultCodesEnum | ResultCodeForCaptcha>>(`auth/login`,{email,password,rememberMe,captcha})
            .then(response => {
                return response;
            })
    },
    logOut( ) {
        return instanse.delete(`auth/login`)
            .then(response => {
                return response;
            })}
};
