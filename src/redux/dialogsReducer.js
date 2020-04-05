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
        case ADD_MESSAGE: {

            let newMessage = {
                id: 5,
                message: state.newMessageText
            };

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            };
        }
        case NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.text
            };

        } default:
            return state;
    }

};




