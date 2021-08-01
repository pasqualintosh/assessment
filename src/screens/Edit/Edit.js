import React, { useState, useEffect } from 'react';
import Create from './../Create/Create';

const Edit = props => {
  useEffect(() => {}, [props.newFriendScreen]);

  return (
    <div>
      <Create
        className={props.newFriendScreen ? 'underlayCreate' : ''}
        setNewFriendScreen={props.setNewFriendScreen}
        newFriendScreen={props.newFriendScreen}
      />
      {props.newFriendScreen && (
        <Create
          setNewFriendScreen={props.setNewFriendScreen}
          newFriendScreen={props.newFriendScreen}
          className="overlayCreate"
        />
      )}
    </div>
  );
};

export default Edit;
