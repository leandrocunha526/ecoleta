import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
//import CreatePoint from "./pages/Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} exact path="/"></Route>
        </BrowserRouter>
    )
}

export default Routes;
