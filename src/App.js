import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Location from "./pages/Location";
import Error from "./pages/Error";

const App = () => {
  const dotenv = require("dotenv");
  dotenv.config({ path: ".env" });
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/location/:index">
          <Location />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
