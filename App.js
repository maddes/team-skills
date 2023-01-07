import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import TeamList from './TeamList';
import TeamMemberDetail from './TeamMemberDetail';
import TeamMemberComparison from './TeamMemberComparison';
import TeamSummary from './TeamSummary';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Team List</Link>
          </li>
          <li>
            <Link to="/comparison">Team Member Comparison</Link>
          </li>
          <li>
            <Link to="/summary">Team Summary</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <TeamList />
        </Route>
        <Route path="/team-member/:id">
          <TeamMemberDetail />
        </Route>
        <Route path="/comparison">
          <TeamMemberComparison />
        </Route>
        <Route path="/summary">
          <TeamSummary />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
