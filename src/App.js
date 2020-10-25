import React from "react";
import styles from './App.module.css';
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return(
        <div>
            <Header />
        <div className={styles.container}>
            <Navbar />
            <Users />
        </div>
        </div>
    )
}
export default App;