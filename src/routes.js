 
import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import comics from './pages/comics';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact patch='/' component={comics} />
        </Switch>
    </BrowserRouter>
);

export default Routes;