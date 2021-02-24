import React from "react";
import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            navigation
            <div>
            <NavLink to='/users' className={styles.nav}>Users</NavLink>
            </div>
            <div>
            <NavLink to='/messages' className={styles.nav}>Messages</NavLink>
            </div>
        </div>
    )
}

export default Navbar;