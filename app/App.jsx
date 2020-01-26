import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './src/Home.jsx';
import store from './js/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route component={Home} />
            </Switch>
        </BrowserRouter>,
    </Provider>,
    document.getElementById("root")
);