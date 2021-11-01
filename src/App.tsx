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
      <Router>
        <Switch>
          <Route exact path="/portfolio/">
            <Home />
          </Route>
          <Route exact path="/portfolio/about">
            <About />
          </Route>
          <Route exact path="/portfolio/works">
            <Works />
          </Route>
          <Route exact path="/portfolio/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
