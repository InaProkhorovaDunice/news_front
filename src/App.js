import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/header';
import MainPage from './components/mainPage';
import SignInPage from './components/registration/signInPage';
import SignUpPage from './components/registration/signUpPage';
import UserProfilePage from './components/userProfilePage';

function App() {
  return (
    <div className="App">
      <Router basename="/app">
        <Header />
        <div className={'main-content'}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/sign_in" component={SignInPage} />
            <Route exact path="/sign_up" component={SignUpPage} />
            <Route exact path="/profile/:id" component={UserProfilePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
