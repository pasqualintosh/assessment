import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './../../components/Header/Header';
import UserForm from '../../components/UserForm/UserForm';
import FriendsList from '../../components/FriendsList/FriendsList';
import { saveUser } from './../../domains/user/index';
import { getRandomArbitrary } from '../../helpers/getRandomArbitrary';

const Edit = props => {
  let { id } = useParams();
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);

  const storeUser = () => {};

  useEffect(() => {
    const loadUser = () => {
      let u = JSON.parse(window.localStorage.getItem('users')) || [];
      let _u = [...u];
      u.splice(
        u.findIndex(e => e.id == id),
        1,
      );
      let f = _u.find(e => e.id == id).friends;
      setName(_u.find(e => e.id == id).name);
      setSelectedFriends([
        ...f.map(e => ({
          id: e,
        })),
      ]);
      setUsers([...u]);
    };

    loadUser();
  }, [selectedFriends.length]);

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

export default Edit;
