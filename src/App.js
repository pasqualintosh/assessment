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
import Read from './screens/user/Read';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users/create">
          <Create />
          <Create />
        </Route>
        <Route path="/user/:id" children={<Edit />} />
        <Route path="/">
          <Read />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
