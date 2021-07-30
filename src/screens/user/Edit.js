import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './../../components/Header/Header';
import UserForm from '../../components/UserForm/UserForm';
import FriendsList from '../../components/FriendsList/FriendsList';
import { saveUser, deleteUser } from './../../domains/user/index';
import { getRandomArbitrary } from '../../helpers/getRandomArbitrary';

const Edit = props => {
  let { id } = useParams();
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);

  const storeUser = () => {
    deleteUser(id);
    saveUser({
      id: getRandomArbitrary(0, 10000),
      name,
      friends: [...selectedFriends],
    });
  };

  useEffect(() => {
    const loadUser = () => {
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

    loadUser();
  }, []);

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
