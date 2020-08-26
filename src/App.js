import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'


function App() {
  return (
    <div className="App">
      <Router>
      <Route path ="/" exact component = {Login}/>
      <Route path ="/signUp" exact component = {SignUp}/>
      </Router>
    </div>
  );
}

export default App;
