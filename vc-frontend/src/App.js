import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/closet'>Closet</Link></li>
          </ul>
        </header>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/closet' component={Closet} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <h1>Home</h1>
  </>
)

const Closet = () => (
  <>
    <h1>Closet</h1>
  </>
)

export default App;
