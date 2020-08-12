import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import AboutUs from './pages/AboutUs';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <div className="navigation">
          <ul className="nav">
           <li>
            <Link to='/' className="link">Home</Link>
            </li>
            <li className="link">
              <Link to='/my-profile' className="link">My Profile</Link>
          </li>
          <li className="link">
            <Link to='/about-us'className="link">About Us</Link>
          </li>
        </ul>
        </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/my-profile" component={MyProfile}/>
            <Route path="/about-us" component={AboutUs}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
