import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import CreateUser from './components/create-user.component';
import Users from './components/users.component';

function App() {
  return (<Router>
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
          <a className="navbar-brand">Idea Collection System</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link bg-dark" to={"/create-idea"}>Create Idea</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link bg-dark" to={"/ideas"}>Idea List</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={CreateUser} />
              <Route path="/create-idea" component={CreateUser} />
              <Route path="/ideas" component={Users} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
