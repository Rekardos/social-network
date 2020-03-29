import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './redux/reduxStore';
import {Provider} from "./StoreContext";


export let renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        , document.getElementById('root'));
};

renderApp(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderApp(state)
});


serviceWorker.unregister();
