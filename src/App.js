import React from "react";
import styles from './App.module.css';
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return(
        <div className={styles.container}>
            <Header />
        <div>
            <Navbar />
            <div className={styles.container_content}>
            <Users />
            </div>
        </div>
        </div>
    )
}
export default App;