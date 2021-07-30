import React, { useState, useEffect } from 'react';
import Header from './../../components/Header/Header';
import UserForm from '../../components/UserForm/UserForm';
import { saveUser } from './../../domains/user/index';
import { getRandomArbitrary } from '../../helpers/getRandomArbitrary';
import FriendsList from '../../components/FriendsList/FriendsList';
import './create.css';

const Create = props => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const loadUser = () => {
    let u = JSON.parse(window.localStorage.getItem('users')) || [];
    setUsers([...u]);
  };

  const storeUser = () => {
    saveUser({
      id: getRandomArbitrary(0, 10000),
      name,
      friends: [...selectedFriends],
    });
    setName('');
    setSelectedFriends([]);
    props.setNewFriendScreen(false);
    loadUser();
  };

  useEffect(() => {
    loadUser();
  }, [props.className]);

  return (
    <div className={props.className}>
      <Header headerText={'Users'}>
        <button onClick={() => storeUser()}>Save</button>
      </Header>
      <UserForm className={props.className} onChange={setName} name={name} />
      <FriendsList
        users={[...users]}
        selectedFriends={[...selectedFriends]}
        selectFriend={setSelectedFriends}
        setNewFriendScreen={props.setNewFriendScreen}
        newFriendScreen={props.newFriendScreen}
      />
    </div>
  );
};

export default Create;
