const ADD_POST ='ADD-POST';
const NEW_POST_TEXT ='NEW-POST-TEXT';


export const addPostActionCreator = () => {
    return {type : ADD_POST};
};

export const newPostTextActionCreator = (text) => {
    return { type : NEW_POST_TEXT,text: text};
};


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
        if (action.type === 'ADD-POST') {
            this._addPost();
        } else if (action.type === 'NEW-POST-TEXT') {
            this._updateNewPostText(action.text);
        } else if (action.type === 'ADD-MESSAGE') {
            this._addMessage();
        } else if (action.type === 'NEW-MESSAGE-TEXT') {
            this._updateNewMessageText(action.text);
        }
    },

    _addPost() {
        let newPost = {
            id: 5,
            text: this._state.profilePage.newPostText
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    _addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText='';
        this._callSubscriber(this._state)
    },
    _updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
};

