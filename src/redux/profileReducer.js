const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';

export const addPostActionCreator = () => {
    return {type: ADD_POST};
};

export const newPostTextActionCreator = (text) => {
    return {type: NEW_POST_TEXT, text: text};
};

export const setProfile = (profile) => {
    return {type: SET_PROFILE, profile: profile};
};


let initialState = {
    newPostText: '',
    posts: [
        {id: 1, text: 'lorem10'},
        {id: 2, text: 'lorem09'},
        {id: 3, text: 'lorem11'},
        {id: 4, text: 'lorem15'}
    ],
    profile: null
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 5,
                text: state.newPostText
            };


            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''

            };
        }
        case NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.text
            };

        }

        case SET_PROFILE: {
            return {...state,profile: action.profile}
        }

        default:
            return state;
    }
};



