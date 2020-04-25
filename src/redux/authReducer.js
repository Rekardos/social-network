import {AuthAPI} from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';


export const setAuthData = (data) => {
    return {type: SET_AUTH_DATA, data};
};


export const setAuthThunkCreator = () => (dispatch) => {
    AuthAPI.authMe()
        .then(response => {
                if(response.resultCode === 0) {
                    dispatch(setAuthData(response.data))
                }
            }
        )
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
                ...action.data,
                isAuth: true

            };

        default:
            return state;
    }

};




