import React, { Component } from 'react';

class Login extends Component {
  // constructor(props) {
  //   super(props)
  //   // this.state = {
  //   //   user: username,
      
  //   // };
  // }
  

  render() {
    return(
      <div className='form'>
        <form method='POST' action='/signup'>
          <input name="username" type="text" placeholder="username"></input>
          <input name="password" type="password" placeholder="password"></input>
          <input type='submit' value='Login' />  
        </form>
        <a href='./signup'>Sign up</a>
      </div>
    )
  }
}

export default Login;

