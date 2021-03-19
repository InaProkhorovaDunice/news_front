import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/header';
import MainPage from './components/mainPage';

function App() {
  return (
    <div className="App">
      <Router basename="/app">
        <Header />
        <div className={'main-content'}>
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
