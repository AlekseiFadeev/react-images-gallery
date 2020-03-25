import React from 'react';
import {UnsplashState} from "./context/unsplash/unsplashState";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {Home} from "./pages/Home";

function App() {
    return (
        <UnsplashState>
            <BrowserRouter>
                <div className="container w-auto h-auto">
                    <Switch>
                        <Route path="/page/:id" component={Home}/>
                        <Route path="/" exact component={Home}>
                            <Redirect to="/page/1"/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </UnsplashState>
    );
}

export default App;
