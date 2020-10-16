import React from "react";
import styles from './User.module.css';

const User = () => {
    return (
        <Avatar user={props.user}/>
    )
 };

const Avatar = (props) => {
    return (
        <img className='avatar'
        src={props.user.avatarUrl}
        alt={props.user.name}/>
    )
}



export default User;