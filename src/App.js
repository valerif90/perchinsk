import React from 'react';
import logo from './bear.svg';
import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import Route from "react-router-dom/es/Route";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Exercises from "./components/Exercises/Exercises";
import Trainings from "./components/Trainings/Trainings";


const App = () => {
  return (
      <div>
          <Header/>
          <section className={styles.container}>
              <Navbar/>
              <div className='container_content'>
                  <Route path='/profile' component={ProfileContainer}/>
                  <Route path='/users' component={Users}/>
                  <Route path='/exercises' component={Exercises}/>
                  <Route path='/trainings' component={Trainings}/>
              </div>
          </section>
      </div>
  );
};

export default App;
