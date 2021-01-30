import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reduсer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

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

});



type PropertiesType<T> = T extends {[key:string]: infer U } ? U : never
//Если Т соответствует конструкции [key:string], выведи(infer) тип из этого Т.
//далее если тип вывелся? тогда верни его, либо верни never - не возращай ничего

export type InferActionsType<T extends {[key:string]: (...args:any[])=>any}> = ReturnType<PropertiesType<T>>




// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;

export default store;

