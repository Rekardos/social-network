import React from "react";
import {addMessageActionCreator, newMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {



    return (
        <StoreContext.Consumer>
            {(store)=>{
                let state = store.getState();

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };

                let changeMessage = (body) => {
                    let messageText = body;
                    store.dispatch(newMessageTextActionCreator(messageText));
                };
                return <Dialogs dialogsPage={state.dialogsPage} addMessage={addMessage} changeMessage={changeMessage}/>
            }}
        </StoreContext.Consumer>

        )
};
export default DialogsContainer;
