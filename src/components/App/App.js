import React from "react";
import Home from "../Home/Index";
import Navbar from "../Navbar/Index";
import MapPage from "../MapPage/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/map">
                        <MapPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
