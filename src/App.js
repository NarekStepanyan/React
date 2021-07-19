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

export const URL = "http://localhost:3001/users";

const isAuth = () => {
    if (localStorage.getItem("id")) {
        return true;
    }

    return false;
}

const PrivateRoute = ({children: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isAuth() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} >
        </Route>
    );
};

function LogoutButton(props) {
    return (
        <button onClick={() => localStorage.removeItem("id")}>
          Log Out
        </button>
      );
  }

class App extends Component { 
    constructor(p) {
        super(p);
        this.state = {isLog: isAuth()}
    }
    render() {
        let button;

        if (isAuth()) {
           button = <LogoutButton />;
          } else {
           button = null;
          }

        return(
            <div>
            <Router>
                <div>

                    <Switch>
                        <Route path="/login">
                            <nav className='a'>
                                <Link to="/home">Home</Link>
                                <Link to="/signup">Sign Up</Link>                            
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
                             </nav>

                             <Home />
                        </Route>
                        <Route path="/userslist">
                             <nav>
                                 <Link to="/login">Log In</Link>
                                 <Link to="/signup">Sign Up</Link>                               
                             </nav>
                        </Route>
                       
                    </Switch>
                    <PrivateRoute children={UsersList} path="/userslist"></PrivateRoute>
                </div>
            </Router>

           {button}
            </div>
        );                           
    }

}

export default App;
