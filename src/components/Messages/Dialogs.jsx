import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {

let state = props.dialogsPage;

let dialogsElements = state.dialogs.map( dialog => <Dialog name={dialog.name} key={dialog.id} id={dialog.id}/>);
let messagesElements = state.messages.map( message => <Message message={message.message} key={message.id}/>)
let newMessageBody = state.newMessageBody;

let onSendMessageClick = () => {
    props.sendMessage();
};

let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
};

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>

                {dialogsElements}

            </div>
            <div className={styles.messages}>
            <div>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea value={newMessageBody} onChange={onNewMessageChange}
                    placeholder='Enter your message'></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Dialogs;