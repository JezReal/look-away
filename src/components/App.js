import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import Information from "../pages/Information";

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
