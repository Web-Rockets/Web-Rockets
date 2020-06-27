
import React, { Component } from 'react';
import { BrowserRouter as Router,  Switch, Route, Link} from 'react-router-dom';
import '../../Style.css'
const image = '../../asset/image.png'
export default class NavBar extends Component {
  render(){
    return(
       <nav >
       <div className= 'nav-elem'>
       <ul>
          <img src={image} />
          <Link to={"/Login"}><li className='shoot'><button className='login'>Sign in</button> </li></Link>
          <Link to={"/canvas"}><li className= 'nav-li'>Canvas</li></Link>
          <Link to={"/"}><li className= 'nav-li'>Home</li></Link>
        </ul>
       </div>
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
