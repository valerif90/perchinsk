import React from "react";
import styles from './Users.module.css';

const Users = () => {
    return (
        <div className={styles.container}>
            <div className={styles.div}>Users</div>
        </div>
    )
 };

export const Hello = () => {
    return (
        <div>Hello Yo!</div>
    )
}

export const Yo = <h1>Yoooo!</h1>



    export const Button = (props) => {
        return <div>
            <button name={props.name}></button>
        </div>
}




export default Users;