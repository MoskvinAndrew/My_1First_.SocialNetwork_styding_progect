import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile_reducer_test_selectors/profile-reducer";
import dialogsReducer from "./dialogs_reducer_test/dialogs-reducer";
import sidebarReducer from "./sidebar_reducer_test/sidebar-reduсer";
import usersReducer from "./user_reducer_test_selectors/users-reducer";
import authReducer from "./auth_reducer_test/auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app_reducer_test/app-reducer";
import chatReducer from "./chatReducer/chat-reducer";

export type StoreReduxType = typeof store
export type RootState = ReturnType<typeof rootReducer>


let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer,
    UsersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer,
    chat:chatReducer

});

export type CommonThunkType<AC extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, AC>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


// type PropertiesType<T> = T extends {[key:string]: infer U } ? U : never
//Если Т соответствует конструкции [key:string], выведи(infer) тип из этого Т.
//далее если тип вывелся? тогда верни его, либо верни never - не возращай ничего

// export type InferActionsType<T extends {[key:string]: (...args:any[])=>any}> = ReturnType<PropertiesType<T>>

export type InferActionsType<T> = T extends {[key:string]:(...args:any[])=> infer U}?U : never




// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;

export default store;

