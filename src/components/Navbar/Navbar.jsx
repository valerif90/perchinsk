import React from "react";
import styles from './Navbar.module.css'
import Users from "../Users/Users";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Users />
        </div>
    )
}

export default Navbar;