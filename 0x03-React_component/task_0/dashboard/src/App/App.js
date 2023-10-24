import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

const notifications = [
  {id: 1, type: 'default', value: 'new course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: '', html: { __html: getLatestNotification() }}
]

export default class App extends Component {
  render () {
    return (
      <>
        <Notifications displayDrawer={false} listNotification={notifications}/>
        <div className='App'>
          <Header />
          {this.props.isLoggedIn ? <CourseList listCourses={ listCourses }/> : <Login />}
          <Footer />
        </div>
      </>
    )
  }
}

App.defaultProps = {
  isLoggedIn: false
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}
