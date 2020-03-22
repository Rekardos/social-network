import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";

export let store = {

    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, text: 'lorem10'},
                {id: 2, text: 'lorem09'},
                {id: 3, text: 'lorem11'},
                {id: 4, text: 'lorem15'}
            ]
        }
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
};

