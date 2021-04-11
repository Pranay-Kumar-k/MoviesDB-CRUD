import React from 'react';
import {Switch,Route} from "react-router-dom";
import Login from '../components/authComponents/Login';
import SignIn from '../components/authComponents/SignIn';
import Home from '../components/movieComponents/Home';
import Navbar from '../components/Navbar';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component = {Navbar}/>
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home}/>
            </Switch>
        </div>
    )
}
