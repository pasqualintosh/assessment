import React, { useState, useEffect } from 'react';
import './friends-list.css';

const FriendsList = props => {
  const [clickedFriends, setClickedFriends] = useState([]);

  useEffect(() => {
    const loadClicked = () => {
      let c = [...props.selectedFriends];
      setClickedFriends([...c]);
    };

    loadClicked();
  }, []);

  const isClicked = id => {
    let found = clickedFriends.find(f => f.id == id);
    if (found) return true;
    return false;
  };

  const removeClicked = id => {
    let found = clickedFriends.findIndex(f => f.id == id);
    if (found != -1) {
      let _clickedFriends = [...clickedFriends.filter(f => f.id !== id)];
      setClickedFriends([..._clickedFriends]);
    }
  };

  const setFriends = f => {
    setClickedFriends([...clickedFriends, f]);
    props.selectFriend([...clickedFriends, f].map(f => f.id));
  };

  const openNewFriend = () => {
    if (!props.newFriendScreen) {
      props.setNewFriendScreen(true);
      return;
    } else {
      let r = confirm('please, continue with user :)');
      if (r == false) {
        props.setNewFriendScreen(false);
        return;
      }
      return;
    }
  };

  return (
    <div>
      <h1>Friends</h1>
      <div>
        <button
          onClick={() => alert('hei, to select a friend just click on it ;)')}>
          Select friend
        </button>
        <button onClick={() => openNewFriend()}>New</button>
      </div>
      {props.users.map(u => (
        <li key={u.id}>
          <span
            onClick={() => setFriends(u)}
            className={isClicked(u.id) ? 'clicked' : ''}>
            {u.name}
          </span>
          <SelectFriendButton
            id={u.id}
            isSelected={isClicked(u.id)}
            removeSelected={removeClicked}
          />
        </li>
      ))}
    </div>
  );
};

const SelectFriendButton = props => {
  if (props.isSelected)
    return (
      <button onClick={() => props.removeSelected(props.id)}>Remove</button>
    );
  return <span></span>;
};

export default FriendsList;
