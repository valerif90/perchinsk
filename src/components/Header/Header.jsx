import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div>dkfj</div>
            <div className={styles.div}>perchinsk</div>
            <div className={styles.loginBlock}>
                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>LOGIN</NavLink> }
            </div>
        </header>
    )
};

export default Header;