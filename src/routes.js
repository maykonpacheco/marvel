 
import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import main from './pages/main';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact patch='/' component={main} />
        </Switch>
    </BrowserRouter>
);

export default Routes;