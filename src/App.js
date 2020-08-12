import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from './pages/Index';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import NotFound from './pages/404';

import LandingPage from './components/LandingPage';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/about' component={AboutPage} />
                    <Route exact path='/contact' component={ContactPage} />
                    <Route exact path='/404' component={NotFound} />
                    <Redirect to='/404' />
                </Switch>
            </Router>
        );
    }
}

export default App;
