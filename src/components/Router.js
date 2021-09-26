import React from "react";
import {
    BrowserRouter,
    Switch,
    Route, Redirect
} from "react-router-dom";
import NavBar from "./NavBar";
import Homepage from "../views/Homepage";
import Projects from "../views/Projects";
import Competitions from "../views/Competitions";

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/projects">
                            <Projects/>
                        </Route>
                        <Route exact path="/competitions">
                            <Competitions/>
                        </Route>
                        <Route exact path="/">
                            <Homepage/>
                        </Route>
                        {/* All incorrect URLs get redirected */}
                        <Route path="/">
                            <Redirect to="/"/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router;