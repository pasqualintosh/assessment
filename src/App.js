import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Update from './screens/Update/Update';
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
          <Update
            setNewFriendScreen={setNewFriendScreen}
            newFriendScreen={newFriendScreen}
          />
        </Route>
        <Route
          path="/user/:id"
          children={
            <Update
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
