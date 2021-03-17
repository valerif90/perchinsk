import React from "react";
import styles from './App.module.css';
import UsersContainer from "./containers/UsersContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';

const App = (props) => {

    return (
        <div className={styles.wallpaper}>
            <div className={styles.container}>
                <Header />
                <div className={styles.section}>
                <Navbar />
                <div className={styles.container_content}>
                <Route path='/profile' render={ () => <Profile />} />
                <Route path='/users' render={ () => <UsersContainer />} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default App;