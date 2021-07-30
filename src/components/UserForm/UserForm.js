import React from 'react';
import './user-form.css';

const UserForm = props => (
  <div className="user-form">
    <label>Name</label>
    <input
      type="text"
      onChange={event => props.onChange(event.target.value)}
      disabled={props.className == 'underlayCreate' ? true : false}
      value={props.name}
    />
  </div>
);

export default UserForm;
