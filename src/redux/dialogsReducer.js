const ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessageActionCreator = (newMessage) => {
    return {type: ADD_MESSAGE, newMessage:newMessage};
};

let initialState = {

    dialogs: [
        {id: 1, name: 'Anton'},
        {id: 2, name: 'Sasha'}
    ],
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
                message: action.newMessage
            };

            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }

        default:
            return state;
    }

};




