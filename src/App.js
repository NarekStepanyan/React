import {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import UsersList from "./UsersList";
import  "./App.css";

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
                         <Route path="/">
                             <nav>
                                 <Link to="/login">Log In</Link>
                                 <Link to="/signup">Sign Up</Link>
                                 <Link to="/userslist">All Users</Link>
                             </nav>

                             <Home />
                        </Route>
                        <Route path="/userslist">
                             <nav>
                                 <Link to="/login">Log In</Link>
                                 <Link to="/signup">Sign Up</Link>
                                 <Link to="/home">Home</Link>
                             </nav>

                             <UsersList />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }

}

export default App;
