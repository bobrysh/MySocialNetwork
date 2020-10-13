import React from 'react';
// import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData
  .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)

  let messagesElements = props.messagesData
  .map( message => <Message text={message.message} id={message.id} />)

  return (
    <div className={classes.dialogs}>    
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>

  );
}

export default Dialogs;
