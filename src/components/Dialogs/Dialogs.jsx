import React from "react";
import c from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Container, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Dialogs = (props) => {

    let refMessage = React.createRef();

    let dialogItem = props.dialogsPage.dialogs.map((dialog) => <DialogItem id={dialog.id} name={dialog.name}/>);

    let message = props.dialogsPage.messages.map((message) => <Message mess={message.message}/>);

    let addMessage = () => {
        props.addMessage()
    };

    let changeMessage = () => {
        let messageText = refMessage.current.value;
        props.changeMessage(messageText);
    };

    return (
      <Container className={c.dialogs}>
          <div>
              {dialogItem}
          </div>
          <div>
              {message}
              <div>
                  <TextField value={props.dialogsPage.newMessageText} onChange={changeMessage} multiline={true} variant="outlined" inputRef={refMessage}/>
                  <Button onClick={addMessage}>Отправить</Button>
              </div>
          </div>

      </Container>

  )
};
export default Dialogs;
