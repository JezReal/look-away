import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../pages/Home/Home";
import Information from "../pages/Information/Information";

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/information">
                    <Information/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
