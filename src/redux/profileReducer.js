const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

export const addPostActionCreator = () => {
    return {type: ADD_POST};
};

export const newPostTextActionCreator = (text) => {
    return {type: NEW_POST_TEXT, text: text};
};


let initialState = {
    newPostText: '',
    posts: [
        {id: 1, text: 'lorem10'},
        {id: 2, text: 'lorem09'},
        {id: 3, text: 'lorem11'},
        {id: 4, text: 'lorem15'}
    ]
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
        default:
            return state;
    }
};



