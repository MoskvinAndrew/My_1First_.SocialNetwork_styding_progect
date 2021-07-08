import {instanse} from "./api";

export const securityAPI = {
    getCaptchaURL(){
        const promise = instanse.get(`/security/get-captcha-url`);
        return promise;
    }
}
