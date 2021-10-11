import "./App.css";
import Desktop from "./Components/TeamsDesktop";
import TeamPage from "./Components/TeamPage/index";
import PlayerChange from './Components/PlayersInfoChange/index';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Desktop />
          </Route>
          <Route exact path="/teams/:teamID">
            <TeamPage />
          </Route>
          <Route path="/teams/:teamID/player/:id">
            <PlayerChange/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
