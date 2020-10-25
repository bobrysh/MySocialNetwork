import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import {updateMessageActionCreator,sendMessageActionCreator} from '../../redux/state'

const Dialogs = (props) => {
  let state = props.store.getState().messagesPage;

  let dialogsElements = state.dialogsData
  .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  let messagesElements = state.messagesData
  .map( message => <Message text={message.message}/>)
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () =>{
    props.store.dispatch(sendMessageActionCreator())
  }

  let onChangeMessage = (e) =>{
    let body = e.target.value;
    props.store.dispatch(updateMessageActionCreator(body))
  }

  return (
    <div className={classes.dialogs}>    
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
      <div>
        <div><textarea value={newMessageBody} onChange={onChangeMessage} placeholder="Enter your message"></textarea></div>
        <div><button onClick={onSendMessageClick}>Add message</button></div>
      </div>
    </div>

  );
}

export default Dialogs;
