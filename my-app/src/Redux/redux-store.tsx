import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";
import usersReducer from "./users-reduser";
import authReduser from "./auth-reduser";

export type StoreReduxType = typeof store
export type RootState = ReturnType<typeof redusers>


let redusers = combineReducers({
   profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer,
    UsersPage:usersReducer,
    auth:authReduser,

});

let store = createStore(redusers);
// @ts-ignore
window.store = store;

export default store;

