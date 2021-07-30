import React, { useState, useEffect } from 'react';
import Header from './../../components/Header/Header';
import UserForm from '../../components/UserForm/UserForm';
import { saveUser } from './../../domains/user/index';
import { getRandomArbitrary } from '../../helpers/getRandomArbitrary';
import UsersList from '../../components/UsersList/UsersList';

const Create = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    const loadUser = () => {
      let u = JSON.parse(window.localStorage.getItem('users')) || [];
      setUsers([...u]);
    };

    loadUser();
  }, []);

  return (
    <div>
      <Header headerText={'Users'}>
        <button
          onClick={() => {
            saveUser({ id: getRandomArbitrary(0, 10000), name, friends: [] });
          }}>
          Save
        </button>
      </Header>
      <UserForm onChange={setName} />
      <UsersList users={[...users]} selectedUsers={[...users]} />
    </div>
  );
};

export default Create;
