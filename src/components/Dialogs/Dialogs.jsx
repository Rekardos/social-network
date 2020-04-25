import React from "react";
import c from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Container} from "@material-ui/core";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogItem = props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id} id={dialog.id}
                                                                           name={dialog.name}/>);

    let message = props.dialogsPage.messages.map((message) => <Message key={message.id} mess={message.message}/>);

    let onSubmit = (formData) => {
        props.addMessage(formData.message)
    }

    return (
        <Container className={c.dialogs}>
            <div>
                {dialogItem}
            </div>
            <div>
                {message}
                <DialogsReduxForm onSubmit={onSubmit}/>
            </div>
        </Container>

    )
};

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name={'message'} component={'input'}/>
        <Field component={'button'}>Отправить</Field>
    </form>
}

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)


export default Dialogs;
