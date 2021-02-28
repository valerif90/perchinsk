import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Messages.module.css'


const Dialog = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}


const Messages = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <Dialog name='Nastya' id='nastya'/>
                <Dialog name='Vika' id='vika'/>
                <Dialog name='Sveta' id='sveta'/>
            </div>
            <div className={styles.messages}>
                <Message message='hi'/>
                <Message message='how are you'/>
                <Message message='what is your name'/>
            </div>
        </div>
    )
};

export default Messages;