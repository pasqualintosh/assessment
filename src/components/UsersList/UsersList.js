import React from 'react';

const UsersList = props => {
  return (
    <div>
      {props.users.map(u => (
        <li>{u.name}</li>
      ))}
    </div>
  );
};

export default UsersList;
