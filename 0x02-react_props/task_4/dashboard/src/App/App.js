import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';


export default function App({ isLoggedIn=false }) {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  )
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}
