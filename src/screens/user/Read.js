import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../components/Header/Header';

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
          <Link to={`/users/create`}>New</Link>
        </button>
      </Header>
      {users.map(u => (
        <li key={u.id}>
          <Link to={`/user/${u.id}`}>{u.name}</Link>
        </li>
      ))}
    </div>
  );
};
export default Read;
