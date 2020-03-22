const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE};
};

export const newMessageTextActionCreator = (text) => {
    return {type: NEW_MESSAGE_TEXT, text: text};
};


export const dialogsReducer = (state, action) => {


    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }

};




