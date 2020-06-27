
import React, { Component } from 'react';
import { BrowserRouter as Router,  Switch, Route, Link} from 'react-router-dom';
import css from '../../Style.css'
const image = '../../image.png'
export default class NavBar extends Component {
  render(){
    return(
       <nav >
       <img src = {image}/>
        <ul  className= 'nav-elem'>
          <Link to={"/Login"}><li><button className='login'>Sign in</button> </li></Link>
          <Link to={"/canvas"}><li>Canvas</li></Link>
          <Link to={"/"}><li>Home</li></Link>
        </ul>
      </nav>
    )
  }
}



// <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/Login">Login</Link>
//             </li>
//             <li>
//               <Link to="/canvas">Canvas</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/Login">
//             <Login />
//           </Route>
//           <Route path="/canvas">
//             <Canvas />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
