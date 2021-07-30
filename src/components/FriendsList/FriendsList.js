import React, { useState, useEffect } from 'react';
import './friends-list.css';

const FriendsList = props => {
  const [clickedFriends, setClickedFriends] = useState([]);

  useEffect(() => {}, [props.selectedFriends]);

  const isClicked = id => {
    return props.selectedFriends.includes(id);
  };

  const removeClicked = id => {
    let friends = [...props.selectedFriends];
    let index = friends.findIndex(e => e == id);
    friends.splice(index, 1);
    props.selectFriend([...friends]);
  };

  const setFriends = f => {
    let friends = props.selectedFriends;
    props.selectFriend([...friends, f]);
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
            className={isClicked(u.id) ? 'clicked' : ''}
            onClick={() => setFriends(u.id)}>
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
