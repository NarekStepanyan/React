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

function LogoutButton() {
    return (
      <button onClick={ localStorage.removeItem("id")}>
        Log Out
      </button>
    );
  }

class App extends Component {
    render() {
        let button;

        if (isAuth) {
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
                       <PrivateRoute children={UsersList} path="/userslist"></PrivateRoute>
                    </Switch>
                </div>
            </Router>

           {button}
            </div>
        );                           
    }

}

export default App;
