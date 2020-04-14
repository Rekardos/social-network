import React from "react";
import {addMessageActionCreator, newMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/AuthRedirectComponent";
import {compose} from "redux";


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


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,mapDispatchToProps)
)(Dialogs);
