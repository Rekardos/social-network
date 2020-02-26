import {renderApp} from "./index";

export let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Anton'},
            {id: 2, name: 'Sasha'}
        ],
        newMessageText:'',
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
};



export let addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText
    };
    state.profilePage.posts.push(newPost);
    updateNewPostText('');
};


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderApp(state);
};




export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    updateNewMessageText('')
};

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    renderApp(state);
};

