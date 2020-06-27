import React, { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router,  Switch, Route, Link} from 'react-router-dom';
import NavBar from './component/navigationBar/navBar'
import Home from'./component/logedIn/home.js'
import Login from'./component/logedIn/Login.js'
import Canvas from'./component/logedIn/canvas.js'
import './style.css'
||||||| merged common ancestors


import NavBar from './component/navigationBar/navBar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Login from './component/logedIn/Login.js'
// import Canvas from './component/logedIn/canvas.js'

=======

// import NavBar from './component/navigationBar/navBar.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './component/logedIn/Login.js';
import Canvas from './component/logedIn/canvas.jsx';

>>>>>>> 829afe3f5b9287deb31c95618ce8c42ad4e8f33a
class App extends Component {
  render() {
    return (
      <Router>
<<<<<<< HEAD
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
||||||| merged common ancestors
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/canvas">Canvas</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/canvas">
            <Canvas />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      )

=======
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/canvas">Canvas</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/canvas">
              <Canvas />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
>>>>>>> 829afe3f5b9287deb31c95618ce8c42ad4e8f33a
  }
}
<<<<<<< HEAD


||||||| merged common ancestors
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>Login</h2>;
}

function Users() {
  return <h2>Canvas</h2>;
}



=======
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>Login</h2>;
}

function Users() {
  return <h2>Canvas</h2>;
}

>>>>>>> 829afe3f5b9287deb31c95618ce8c42ad4e8f33a
export default App;
