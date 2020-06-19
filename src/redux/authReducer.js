import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';


export const setAuthData = (data) => {
    return {type: SET_AUTH_DATA, data};
};


export const setAuthThunkCreator = () => async (dispatch) => {
    let response = await AuthAPI.authMe()

    if (response.resultCode === 0) {
        dispatch(setAuthData({...response.data, isAuth: true}))
    }


}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {

    let response = await AuthAPI.loginMe(email, password, rememberMe, false)

    if (response.resultCode === 0) {
        dispatch(setAuthThunkCreator())
    } else {
        dispatch(stopSubmit('login', {_error: response.messages[0]}))
    }

}

export const logOutThunkCreator = () => async (dispatch) => {
    let response = await AuthAPI.logOutMe()

    if (response.resultCode === 0) {
        dispatch(setAuthData({id: null, email: null, login: null, isAuth: false}))
    }

}


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false

};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data
            };

        default:
            return state;
    }
};




