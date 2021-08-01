import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

import Create from './screens/Create/Create';
import Edit from './screens/Edit/Edit';
import Read from './screens/Read/Read';

const App = () => {
  const [newFriendScreen, setNewFriendScreen] = useState(false);

  useEffect(() => {
    const loadNewFriendVar = () => {
      let nfv = window.localStorage.getItem('app')
        ? JSON.parse(window.localStorage.getItem('app')).new_friend
        : false;
      setNewFriendScreen(nfv);
    };

    loadNewFriendVar();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/users/create">
          <Create
            className={newFriendScreen ? 'underlayCreate' : ''}
            setNewFriendScreen={setNewFriendScreen}
            newFriendScreen={newFriendScreen}
          />
          {newFriendScreen && (
            <Create
              setNewFriendScreen={setNewFriendScreen}
              newFriendScreen={newFriendScreen}
              className="overlayCreate"
            />
          )}
        </Route>
        <Route
          path="/user/:id"
          children={
            <Edit
              setNewFriendScreen={setNewFriendScreen}
              newFriendScreen={newFriendScreen}
            />
          }
        />
        <Route path="/">
          <Read />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
