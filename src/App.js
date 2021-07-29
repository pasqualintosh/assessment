import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

import Create from './screens/user/Create';
import Edit from './screens/user/Edit';
import List from './screens/user/List';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/users/create">Create</Link>
            </li>
            <li>
              <Link to="/user/1">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/users/create">
            <Create />
          </Route>
          <Route path="/user/:id" children={<Edit />} />

          <Route path="/">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
