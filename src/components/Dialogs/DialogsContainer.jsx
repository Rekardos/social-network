import React from "react";
import {addMessageActionCreator, newMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        changeMessage: (messageText) => dispatch(newMessageTextActionCreator(messageText))
    }
};

let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage
    }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
