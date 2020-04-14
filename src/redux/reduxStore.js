import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
);

export let store = createStore(reducers,applyMiddleware(thunk));



