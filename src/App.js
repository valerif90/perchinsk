import React from 'react';
import logo from './bear.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import Route from "react-router-dom/es/Route";


const App = () => {
  return (
      <div className='container'>
          <Header/>
          <section>
              <Navbar/>
              <div className='container_content'>
                  <Route path='/profile' component={Profile}/>
                  <Route path='/users' component={Users}/>
              </div>
          </section>
      </div>
  );
};

export default App;
