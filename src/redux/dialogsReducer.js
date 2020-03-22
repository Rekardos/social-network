const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE};
};

export const newMessageTextActionCreator = (text) => {
    return {type: NEW_MESSAGE_TEXT, text: text};
};

let initialState = {

    dialogs: [
        {id: 1, name: 'Anton'},
        {id: 2, name: 'Sasha'}
    ],
    newMessageText: '',
    messages: [

        {id: 1, message: 'My car'},
        {id: 2, message: 'Yes my'},
        {id: 3, message: 'Yes my'},
        {id: 4, message: 'Yes my'}
    ]

};

export const dialogsReducer = (state = initialState, action) => {


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




