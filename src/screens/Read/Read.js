import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';

const Read = () => {
  const [users, setUsers] = useState([]);

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
        <button>
          <a href={`/users/create`}>New</a>
        </button>
      </Header>
      {users.map(u => (
        <li key={u.id}>
          <a href={`/user/${u.id}`}>{u.name}</a>
        </li>
      ))}
    </div>
  );
};
export default Read;
