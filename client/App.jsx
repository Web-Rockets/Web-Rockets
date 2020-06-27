import React, { Component } from 'react';

// import NavBar from './component/navigationBar/navBar.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './component/logedIn/Login.js';
import Canvas from './component/logedIn/canvas.jsx';

class App extends Component {
  render() {
    return (
      <Router>
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
  }
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>Login</h2>;
}

function Users() {
  return <h2>Canvas</h2>;
}

export default App;
