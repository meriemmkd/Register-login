import {BrowserRouter as Router , Switch , Route, Link } from 'react-router-dom' ;
import './App.css';
import React from 'react';
import Login from './components/login/Login';
import Register from './components/register/Register';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
     
       <Router>
        <Switch>
          <Route path="/" exact > <Login/>
          </Route>
          <Route path="/register" > <Register/>
        
          </Route>
        </Switch>
       </Router>
      </header>
    </div>
  );
}


export default App;
