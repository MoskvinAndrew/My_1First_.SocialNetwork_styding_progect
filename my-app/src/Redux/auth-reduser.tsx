import {v1} from "uuid";
import {AuthDataType, postsDataType, profilePageType} from "./Store";



const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';

export type setAuthUserDataType = {
    type:typeof SET_USER_AUTH_DATA,
    data:{
        id: number|null,
        login: string|null,
        email: string|null
    }
}


let initialState = {
    data:{
        id: null,
        login: null,
        email: null
    },
    messages: [],
    resultCode: null,
}

type ActionsType = setAuthUserDataType

const authReduser = (state: AuthDataType = initialState, action: ActionsType) => {

    switch (action.type) {

        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data
            };


            default:
            return state;

    }
}
export const setAuthUserData = (id:number,login:string,email:string):setAuthUserDataType =>({type:'SET_USER_AUTH_DATA',data:{id,login,email}});

export default authReduser;