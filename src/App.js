import React from 'react';
import './App.css';
import Home from './components/Home';
import LinkedPage from './components/LinkedPage';
import BoaTarde from './components/BoaTarde';
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (

    <HashRouter basename='/'>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/linkedpage">LinkedPage</Link></li>
        <li><Link to="/boatarde">BoaTarde</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/linkedpage" component={LinkedPage} />
      <Route path="/boatarde" component={BoaTarde} />

    </HashRouter>

  );
}

export default App;
