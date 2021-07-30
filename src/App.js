import React, { useState, useEffect } from 'react';
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
          />
          {newFriendScreen && (
            <Create
              setNewFriendScreen={setNewFriendScreen}
              newFriendScreen={newFriendScreen}
              className="overlayCreate"
            />
          )}
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
