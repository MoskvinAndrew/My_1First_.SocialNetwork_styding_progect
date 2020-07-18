import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";

export type StoreReduxType = typeof store
export type RootState = ReturnType<typeof redusers>



let redusers = combineReducers({profileReducer,dialogsReducer,sidebarReducer});

let store = createStore(redusers);

export default store;

