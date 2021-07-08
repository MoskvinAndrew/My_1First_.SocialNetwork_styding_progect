import {CommonThunkType, InferActionsType, RootState} from "../redux-store";
import {AuthMeThunk} from "../auth_reducer_test/auth-reducer";


let initialState = {
      initialized:false,
      error:'',
}

type ActionsType = InferActionsType<typeof actions>
type ThunkType = CommonThunkType<ActionsType>

type initialStateType = typeof initialState;


const appReducer = (state: initialStateType = initialState, action: ActionsType):initialStateType => {
    switch (action.type) {

        case 'appReducer/INITIALIZED_SUCCESS':
            return {...state,initialized:true};
        case 'appReducer/SET_APP_ERROR':
            return {...state,error:action.error};

          default:
            return state;

    }
}

let actions = {
     InitializedSuccess: () => ({type: 'appReducer/INITIALIZED_SUCCESS'} as const),
     setAppError: (error: string) => ({type: 'appReducer/SET_APP_ERROR', error} as const)
}

export const initializeAppTC = ():ThunkType=>
   async (dispatch)=> {
    let promiseAuthMe = dispatch(AuthMeThunk());
      await Promise.all([promiseAuthMe]).then(()=>{
           dispatch(actions.InitializedSuccess())
       })
           .catch((error:any) =>{
               dispatch(actions.setAppError(error));
           })
       };


export default appReducer;