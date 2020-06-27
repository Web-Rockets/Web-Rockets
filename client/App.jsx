import React, { Component } from 'react';
import { BrowserRouter as Router,  Switch, Route, Link} from 'react-router-dom';
import NavBar from './component/navigationBar/navBar'
import Home from'./component/logedIn/home.js'
import Login from'./component/logedIn/Login.js'
import Canvas from'./component/logedIn/canvas.js'
import './style.css'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route path="/login"  component={Login}/>
            <Route path="/canvas"  component={Canvas}/>
            <Route path="/home"  component={Home}/>
          </Switch>
        </div>
    </Router>
    )
  }
}


export default App;

