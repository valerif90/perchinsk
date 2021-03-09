import React from "react";
import styles from './App.module.css';
import User from "./components/User/User";
import UsersContainer from "./components/Users/UsersContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Messages/DialogsContainer";

const App = () => {

    return (
        <div className={styles.container}>
                <Header />
            <div className={styles.section}>
                <Navbar />
            <div className={styles.container_content}>
                <Route path='/profile' render={ () => <Profile />} />
                <Route path='/user' render={ () => <User />} />
                <Route path='/users' render={ () => <UsersContainer />} />
                <Route path='/dialogs' render={ () => <DialogsContainer />} />
            </div>
            </div>
        </div>
    )
}

export default App;