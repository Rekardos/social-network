import {ProfileAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

export const addPostActionCreator = (newMessage) => {
    return {type: ADD_POST, newMessage:newMessage};
};

export const setProfile = (profile) => {
    return {type: SET_PROFILE, profile: profile};
};

export const setProfileStatus = (profileStatus) => {
    return {type: SET_PROFILE_STATUS, profileStatus: profileStatus};
};

export const getProfileThunkCreator = (userId) => (dispatch) => {
    if (userId) {
        ProfileAPI.profile(userId)
            .then(response => {
                    dispatch(setProfile(response))
                }
            )
    }
}

export const getProfileStatusThunkCreator = (userId) => (dispatch) => {
    if (userId) {
        ProfileAPI.getProfileStatus(userId)
            .then(response => {

                    dispatch(setProfileStatus(response))
                }
            )
    }
}

export const setProfileStatusThunkCreator = (status) => (dispatch) => {
    if (status) {
        ProfileAPI.setProfileStatus(status)
            .then(response => {
                    dispatch(setProfileStatus(response))
                }
            )
    }
}

let initialState = {
    posts: [
        {id: 1, text: 'lorem10'},
        {id: 2, text: 'lorem09'},
        {id: 3, text: 'lorem11'},
        {id: 4, text: 'lorem15'}
    ],
    profile: null,
    profileStatus: null
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 5,
                text: action.newMessage
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }

        case SET_PROFILE: {
            return {...state, profile: action.profile}
        }

        case SET_PROFILE_STATUS: {
            return {...state, profileStatus: action.profileStatus}
        }

        default:
            return state;
    }
};



