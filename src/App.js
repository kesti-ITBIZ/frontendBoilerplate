import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Hello from "./containers/Hello";
import World from "./containers/World";

import "./App.css";

export default class App extends Component {
    render() {
        return (
            <div>
                <div><Link to="/hello">hello</Link></div>
                <div><Link to="/world">world</Link></div>
                <p>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Hello} />
                            <Route path="/hello" component={Hello} />
                            <Route path="/world" component={World} />
                        </Switch>
                    </BrowserRouter>
                </p>
            </div>
        );
    }
}
