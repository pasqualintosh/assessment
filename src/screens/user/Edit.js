import React from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
  let { id } = useParams();

  return <div>Edit user {id}</div>;
};

export default Edit;
