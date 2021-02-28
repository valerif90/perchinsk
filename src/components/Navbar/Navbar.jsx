import React from "react";
import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.navigation}>navigation</div>
            <div className={styles.item}>
            <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
            <NavLink to='/user' activeClassName={styles.active}>User</NavLink>
            </div>
            <div className={styles.item}>
            <NavLink to='/users' activeClassName={styles.active}>Users</NavLink>
            </div>
            <div className={styles.item}>
            <NavLink to='/messages' activeClassName={styles.active}>Messages</NavLink>
            </div>
        </div>
    )
}

export default Navbar;