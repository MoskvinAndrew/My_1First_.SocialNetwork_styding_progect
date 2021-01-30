import {Dispatch} from "redux";
import {AuthMeThunk} from "./auth-reducer";


const INITIALIZED_SUCCESS = 'appReducer/INITIALIZED_SUCCESS';
const SET_APP_ERROR = 'appReducer/SET_APP_ERROR';

export type setInitializedType = {
    type:typeof INITIALIZED_SUCCESS,
};
export type setAppErrorType = {
    type: typeof SET_APP_ERROR,
    error:string
}

let initialState = {
      initialized:false,
      error:'',
}

type ActionsType = setInitializedType|setAppErrorType

type initialStateType = typeof initialState;


const appReducer = (state: initialStateType = initialState, action: ActionsType):initialStateType => {
    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {...state,initialized:true};
        case SET_APP_ERROR:
            return {...state,error:action.error};

          default:
            return state;

    }
}
export const InitializedSuccess = ():setInitializedType =>({type:INITIALIZED_SUCCESS});
export const setAppError = (error:string):setAppErrorType =>({type:SET_APP_ERROR,error});

export const initializeAppTC = () =>
    (dispatch:Dispatch)=> {
    // @ts-ignore
        let promiseAuthMe = dispatch(AuthMeThunk());
       Promise.all([promiseAuthMe]).then(()=>{
           dispatch(InitializedSuccess())
       })
           .catch((error:any) =>{
               dispatch(setAppError(error));
           })
       };



export default appReducer;