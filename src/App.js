import React from 'react';
import logo from './bear.svg';
import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/Users/Users";
import Route from "react-router-dom/es/Route";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Exercises from "./components/Exercises/Exercises";
import Trainings from "./components/Trainings/Trainings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Footer from "./components/Footer/Footer";
import FooterContainer from "./components/Footer/FooterContainer";


const App = () => {
  return (
      <div>
          <img className={styles.wallpaper} src="https://arhivach.ng/storage2/2/98/298bfd9a5ea4c5662e8678202d4a5a02.jpg" alt=""/>
             <div className={styles.container}>
                  <HeaderContainer />
                 <div>
                  <Navbar/>
                     <div className={styles.container_content}>
                          <Route path='/profile' component={ProfileContainer}/>
                          <Route path='/users' component={Users}/>
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
