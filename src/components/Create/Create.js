import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import UserForm from '../UserForm/UserForm';
import { saveUser, deleteUser } from '../../domains/user/index';
import { getRandomArbitrary } from '../../helpers/getRandomArbitrary';
import FriendsList from '../FriendsList/FriendsList';
import './create.css';
import { useParams } from 'react-router-dom';

const Create = props => {
  let { id } = useParams();
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const loadUser = () => {
    let u = JSON.parse(window.localStorage.getItem('users')) || [];
    setUsers([...u]);
  };

  useEffect(() => {
    if (id && !props.newFriendScreen) {
      const fetchUser = () => {
        let u = JSON.parse(window.localStorage.getItem('users')) || [];
        let _u = [...u];
        u.splice(
          u.findIndex(e => e.id == id),
          1,
        );

        let i = _u.find(e => e.id == id);
        setName(i.name);
        setSelectedFriends([...i.friends]);
        setUsers([...u]);
      };

      fetchUser();
    } else loadUser();
  }, [props.className, props.setNewFriendScreen]);

  const updateUser = () => {
    deleteUser(id);
    saveUser({
      id: getRandomArbitrary(0, 10000),
      name,
      friends: [...selectedFriends],
    });
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

  const storeOrUpdate = () => {
    if (id && !props.newFriendScreen) updateUser();
    else storeUser();
  };

  return (
    <div className={props.className}>
      <Header headerText={'Users'}>
        <button onClick={() => storeOrUpdate()}>Save</button>
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
