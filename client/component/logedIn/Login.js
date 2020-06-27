import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const button = document.getElementById('button');
    button.onclick = () => {
      this.props.onLogged(username.value, password.value);
      username.value = '';
      password.value = '';
    }
  }

  render() {
    return(
      <div className='form'>
        {/* <form> */}
          <input name="username" type="text" placeholder="username" id="username"></input>
          <input name="password" type="password" id="password"></input>
          <input type='button' value='Log In' id="button"/>  
        {/* </form> */}
        <a href='./signup'>Sign up</a>

      </div>
    )
  }
}

export default Login;

