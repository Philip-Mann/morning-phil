import { Route } from "react-router-dom";
import About from "../components/about/About"
import Landing from "../components/landing/Landing";


const Routes = () => {

    return (
        <>
            <Route
                exact
                path="/"
                render={() => <Landing />}
            />
            <Route
                exact
                path="/about"
                render={() => <About />}
            />
        </>
    )
}

export default Routes;