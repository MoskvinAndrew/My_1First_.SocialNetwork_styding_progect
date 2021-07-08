export enum ResultCodesEnum {
    success = 0,
    error = 1

}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

//Auth api types

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D,
    messages: Array<string>,
    resultCode: RC
}


export type MeResponseType = {
    id: number,
    login: string,
    email: string
}

export type loginPOSTResponseType = {
    userId: number
}
