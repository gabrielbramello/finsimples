import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Dashboard from './sections/Dashboard';
import Login from './sections/Login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact/>
            <Route component={Dashboard} path="/dashboard" />
        </BrowserRouter>
    )
    
}

export default Routes;