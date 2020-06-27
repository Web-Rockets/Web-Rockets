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
<<<<<<< HEAD
        <form method='POST' action='/signup'>
          <input name="username" type="text" placeholder="username"></input>
          <input name="password" type="password" placeholder="password"></input>
          <input type='submit' value='Login' />  
        </form>
=======
        {/* <form> */}
          <input name="username" type="text" placeholder="username" id="username"></input>
          <input name="password" type="password" id="password"></input>
          <input type='button' value='Log In' id="button"/>  
        {/* </form> */}
>>>>>>> 131b37281f22aec978f3ca9f8587ccec3a35574e
        <a href='./signup'>Sign up</a>

      </div>
    )
  }
}

export default Login;

