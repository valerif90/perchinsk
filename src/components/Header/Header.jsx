import React from "react";
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Barbara_Palvin_Cannes_2016.jpg" height="150" alt=""/>
            </div>
            <div className={styles.title}>BARBARA</div>
        </div>
    )
}

export default Header;