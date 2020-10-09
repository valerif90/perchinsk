import React from 'react';
import logo from './bear.svg';
import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/Users/Users";
import {Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Exercises from "./components/Exercises/Exercises";
import Trainings from "./components/Trainings/Trainings";
import HeaderContainer from "./components/Header/HeaderContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import Login from "./components/Login/Login";


const App = () => {
  return (
      <div>
          <img className={styles.wallpaper} src="https://upl.stack.com/wp-content/uploads/2015/12/17010133/Stack-Lunges-outside.jpg" alt=""/>
             <div className={styles.container}>
                  <HeaderContainer />
                 <div>
                  <Navbar/>
                     <div className={styles.container_content}>
                          <Route path='/profile' component={ProfileContainer}/>
                          <Route path='/users' component={Users}/>
                         <Route path='/login' render={ () => <Login /> }/>
                          <Route path='/exercises' component={Exercises}/>
                          <Route path='/trainings' component={Trainings}/>
                    </div>
                 </div>
                 <FooterContainer />
          </div>
      </div>
        )
    }

export default App;
