import React, { Component } from 'react';

import NavBar from './component/navigationBar/navBar.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './component/logedIn/Login';
import Canvas from './component/logedIn/canvas.jsx';
import Home from './component/logedIn/home'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logStatus: false
    }
    this.onLogged = this.onLogged.bind(this);
  }

  onLogged(username, password) {
    console.log('onLogged invoked')
    console.log(username, password)
    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
      console.log('onLogged data:', data);
      this.setState({
        ... this.state,
        logStatus: data.logStatus
      })
    })
    .catch(err => console.log('err onLogged:', err))
  }

  render() {
    let renderCanvas;
    if (this.state.logStatus) {
      renderCanvas = <Canvas />
    }
    let renderLogin;
    if (!this.state.logStatus) {
      renderLogin = <Route path="/login" render={(routeProps) => (
        <Login onLogged={ this.onLogged }/>
      )}/>
    }
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            {/* <Route path="/login"  component={Login} /> */}
            { renderLogin }
            {/* <Route path="/canvas"  component={Canvas}/> */}
            <Route path="/"  component={Home}/>
          </Switch>
        </div>
        { renderCanvas }
    </Router>
    )
  }
}


export default App;
