import "./App.css";
import Desktop from "./Components/TeamsDesktop";
import TeamPage from "./Components/TeamPage/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Desktop />
          </Route>
          <Route>
            <TeamPage path="/players" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
