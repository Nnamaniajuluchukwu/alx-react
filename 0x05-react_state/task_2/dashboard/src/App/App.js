import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppContext, { user, logOut } from './AppContext';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  body: {
    height: '100vh',
    maxWidth: '100vw',
    marginBottom: '12rem'
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    fontStyle: 'italic',
    fontFamily: 'Arial, Helvetica, sans-serif',
    position: 'fixed',
    bottom: 0,
    borderTop: '3px solid #e0354b',
    width: '100%'
  }
})

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
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: logOut
    }
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    });
  }

  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    });
  }

  componentDidMount() {
    // Event listener when the component is mounted
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Remove the event listener when the component unmounts
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      // this.logOut();
    }
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  }

  logOut() {
    this.setState({
      user: user,
    });
  }

  render () {
    return (
      <AppContext.Provider value={{
        user: this.state.user,
        logOut: this.logOut
        }
      }>
        <>
          <Notifications 
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            listNotification={notifications}
          />
          <div className={css(styles.body)}>
            <Header />
            {this.state.user.isLoggedIn ?
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={ listCourses }/>
              </BodySectionWithMarginBottom>
              : 
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={this.logIn}/>
              </BodySectionWithMarginBottom>}
            <BodySection title='News from the School'>
              <p> I love you</p>
            </BodySection>
            <div className={css(styles.footer)}>
              <Footer />
            </div>
          </div>
        </>
      </AppContext.Provider>
    )
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}
