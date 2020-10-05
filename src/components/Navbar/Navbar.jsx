import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

// let classes = {
//     'nav': 'Navbar_nav__1WUpx',
//     'item': 'Navbar_item__GKRGb'
//      'active':  'blablabla active'
// }


// 'item active';
// let c1 = 'item';
// let c2 = 'active';
// let classes = c1 + ' ' + c2;
// let classesNew = `${s.item} ${s.active}`;


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.active}>Users</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;
