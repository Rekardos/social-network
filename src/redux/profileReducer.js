const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

export const addPostActionCreator = () => {
    return {type: ADD_POST};
};

export const newPostTextActionCreator = (text) => {
    return {type: NEW_POST_TEXT, text: text};
};


export const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
};



