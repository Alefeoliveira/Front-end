import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Incidents from './pages/NewIncidents'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/registro" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={Incidents}/>
            </Switch>
        </BrowserRouter>
    );
}