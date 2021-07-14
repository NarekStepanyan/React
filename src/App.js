import {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import UsersList from "./UsersList";
import  "./App.css";

const PrivateRoute = ({children: Component, ...props}) => {
 
      const val = localStorage.getItem("id");
        return <Route {...props}>
          {val? <Component/>: <Redirect to='/login'/>}
      </Route>
   }

class App extends Component {
    render() {
        return(
            <Router>
                <div>

                    <Switch>
                        <Route path="/login">
                            <nav className='a'>
                                <Link to="/home">Home</Link>
                                <Link to="/signup">Sign Up</Link>
                                <Link to="/userslist">All Users</Link>

                            </nav>
                            <LogIn />
                        </Route>
                        <Route path="/signup">
                            <nav>
                                <Link to="/login">Log In</Link>
                                <Link to="/home">Home</Link>
                                <Link to="/userslist">All Users</Link>

                            </nav>
                            <SignUp />
                        </Route>
                         <Route path="/home">
                             <nav>
                                 <Link to="/login">Log In</Link>
                                 <Link to="/signup">Sign Up</Link>
                                 <Link to="/userslist">All Users</Link>
                             </nav>

                             <Home />
                        </Route>
                       <PrivateRoute children={UsersList} path="/userslist"></PrivateRoute>
                    </Switch>
                </div>
            </Router>
        );
    }

}

export default App;
