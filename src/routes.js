import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main/Main.js';
import Product from './pages/Product/Product.js'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;