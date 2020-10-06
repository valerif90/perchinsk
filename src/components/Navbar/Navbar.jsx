import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.active}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/exercises" activeClassName={styles.active}>Exercises</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/trainings" activeClassName={styles.active}>Trainings</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;
