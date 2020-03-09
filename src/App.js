import React from 'react';
import {UnsplashState} from "./context/unsplash/unsplashState";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";

function App() {
    return (
        <UnsplashState>
            <BrowserRouter>
                <div className="container w-auto h-auto">
                    <Switch>
                        <Route path="/page/:id" component={Home}/>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </UnsplashState>
    );
}

export default App;
