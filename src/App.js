import React from "react";
import styles from './App.module.css';
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import Messages from "./components/Messages/Messages";

const App = () => {
    return(
        <div>
            <Header />
        <div className={styles.container}>
            <Navbar />
            <div className={styles.container_content}>
            < Route path='/users' component={Users} />
            < Route path='/messages' component={Messages} />
            </div>
        </div>
        </div>
    )
}
export default App;