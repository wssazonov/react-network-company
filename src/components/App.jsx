import React from 'react';
import { Switch, Route } from 'react-router'
import './App.scss';
import Main from './Main';
import LoginPage from './LoginPage/LoginPage';
import '../styles/main.scss'
import '../../node_modules/react-bootstrap-modal/lib/css/rbm-complete.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact component={ LoginPage } />
        <Route path="/" component={ Main } />
      </Switch>
    </div>
  );
}

export default App;
