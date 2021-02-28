import React from "react";
import styles from './App.module.css';
import User from "./components/User/User";
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import Messages from "./components/Messages/Messages";
import Profile from './components/Profile/Profile';

const App = () => {
    return (
        <div className={styles.container}>
                <Header />
            <div className={styles.section}>
                <Navbar />
            <div className={styles.container_content}>
                <Route path='/profile' component={Profile}/>
                <Route path='/user' component={User}/>
                <Route path='/users' component={Users}/>
                <Route exact path='/messages' component={Messages}/>
            </div>
            </div>
        </div>
    )
}

export default App;