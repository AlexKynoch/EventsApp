import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/home/Home"

function Router() {
    return <BrowserRouter>
        <Navbar />
        <Switch>   {/*detects path in url ie if login renders login page */}
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/login">Login</Route>
            <Route path="/register">Register</Route>
        </Switch>
    </BrowserRouter>
}

export default Router;