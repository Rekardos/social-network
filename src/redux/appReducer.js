import {AuthAPI} from "../api/api";
import {setAuthData, setAuthThunkCreator} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


export const initializedSuccess = () => {
    return {type: INITIALIZED_SUCCESS};
};

export const initializeApp = () => (dispatch) => {
    let promiseAuth = dispatch(setAuthThunkCreator())

    Promise.all([promiseAuth])
        .then(() =>{
            dispatch(initializedSuccess())
        })
}




const initialState = {
    initialized: false
}

export const appReducer = (state = initialState,action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }
}
