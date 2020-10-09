import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.div}>perchinsk</div>
            <div className={styles.loginBlock}>
                {props.auth ?
                    <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>LOGIN</NavLink> }
            </div>
        </div>
    )
};

export default Header;