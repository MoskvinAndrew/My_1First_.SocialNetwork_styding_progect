import {Dispatch} from "redux";
import {AuthAPI} from "../api/api";
import {AuthMeThunk} from "./auth-reducer";

type AppDataType = {
    initialized:boolean
}


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


export type setIsLoggedInType = {
    type:typeof INITIALIZED_SUCCESS,
    isLoggin:boolean,
}

let initialState = {
      initialized:false
}

type ActionsType = setIsLoggedInType

const appReducer = (state: AppDataType = initialState, action: ActionsType) => {
    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {...state,initialized:true}

          default:
            return state;

    }
}
export const InitializedSuccess = () =>({type:'INITIALIZED_SUCCESS'});

export const initializeAppTC = () =>
    (dispatch:Dispatch)=> {


        // @ts-ignore
        let promiseAuthMe = dispatch(AuthMeThunk());
       Promise.all([promiseAuthMe]).then(()=>{
           dispatch(InitializedSuccess())

       })
       };



export default appReducer;