import React from 'react';

import '../styles/EditButton.css';

const EditButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className='EditButton'>
      Edit
    </button>
  );
};

export default EditButton;
