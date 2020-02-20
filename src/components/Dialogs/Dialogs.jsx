import React from "react";
import c from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  return (
      <div className={c.dialogs}>
          <div className={c.dialogsItems}>
             <DialogItem id={1} name={'Anton'} />
             <DialogItem id={2} name={'Masha'} />
             <DialogItem id={3} name={'Sasha'} />
             <DialogItem id={4} name={'Dasha'} />
          </div>
          <div className={c.messages}>
              <Message message={'Hello'}/>
              <Message message={'Hi'}/>
              <Message message={'Yo!'}/>
              <Message message={'Yes'}/>
          </div>
      </div>

  )
};

export default Dialogs;
