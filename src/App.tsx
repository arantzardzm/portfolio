import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import { Home, About, Works, Contact } from './pages';

// css styles
import './styles/main.scss';
import './styles/home.scss';
import './styles/about.scss';
import './styles/works.scss';
import './styles/contact.scss';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router basename='/portfolio'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/works">
            <Works />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
