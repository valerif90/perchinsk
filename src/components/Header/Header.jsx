import React from "react";
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Barbara_Palvin_Cannes_2016.jpg" height="150" alt=""/>
        </div>
    )
}

export default Header;