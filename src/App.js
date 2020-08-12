import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/Index';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import NotFound from './pages/404';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={HomePage} />
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
