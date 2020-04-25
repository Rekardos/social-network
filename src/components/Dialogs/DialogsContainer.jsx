import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/AuthRedirectComponent";
import {compose} from "redux";
import {addMessageActionCreator} from "../../redux/dialogsReducer";


let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
         addMessage: (newMessage) => {dispatch(addMessageActionCreator(newMessage))}
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,mapDispatchToProps)
)(Dialogs);
