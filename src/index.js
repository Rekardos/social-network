import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addMessage, addPost, state, updateNewMessageText, updateNewPostText} from "./state";


export let renderApp = (state) => {
    ReactDOM.render(<App state={state}
                         addMessage={addMessage}
                         updateMessageText={updateNewMessageText}
                         addPost={addPost}
                         updateText={updateNewPostText}/>, document.getElementById('root'));
};

renderApp(state);


serviceWorker.unregister();
