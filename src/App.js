import React from 'react';
import {UnsplashState} from "./context/unsplash/unsplashState";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";

function App() {
    return (
        <UnsplashState>
            <BrowserRouter>
                <div className="container w-auto h-auto">
                    <h1 className="mt-5">Hello World!</h1>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </UnsplashState>
    );
}

export default App;
