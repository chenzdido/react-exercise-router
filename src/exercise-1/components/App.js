import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import AboutUs from './pages/AboutUs';
import Products from "./pages/Products";
import Product from "./pages/Product";
import './App.css';

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
            <li>
            <Link to='/products' className="link">Products</Link>
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
            <Route path="/products" component={Products}/>
            <Route path="/my-profile" component={MyProfile}/>
            <Route path="/about-us" component={AboutUs}/>
            <Route path='/products/:id' component={Product} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
