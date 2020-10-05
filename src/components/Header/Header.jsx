import React from "react";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://i.pinimg.com/originals/7e/e6/8f/7ee68f76cef6835a1ce2a83ac3c2368d.jpg" height={200}/>
            <div className={styles.div}>perchinsk</div>

            <button onClick={() => this.setState({ liked: true })}>
                Нравится
            </button>

        </header>
    )
};

export default Header;