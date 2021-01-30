export enum ResultCodesEnum {
    success = 0,
    error = 1

}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}
//Auth api types

export type MeResponseType = {
    data:{id:number,
           login:string,
           email:string}
    resultCode: ResultCodesEnum
    messages: Array<string>
}

export type loginPOSTResponseType = {
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
    data: {
        userId:number
    }

}
