import {
    loginPOSTResponseType,
    MeResponseType,
    APIResponseType,
    ResultCodeForCaptcha,
    ResultCodesEnum
} from "../types/typesForAuthAxiosResponse";
import {instanse} from "./api";





export const AuthAPI = {
    // <APIResponseType<MeResponseType>> типизация ми запроса, где то ошибка
    me() {
        return instanse.get(`auth/me`)
            .then((response) => {
                return response.data;
            })
            .catch(()=>{
                alert("some trouble")
            })
    },
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
