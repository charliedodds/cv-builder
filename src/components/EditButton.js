import React from 'react';

import '../styles/EditButton.css';

const EditButton = (props) => {
  return (
    <button onClick={props.onClick} className='EditButton'>
      Edit
    </button>
  );
};

export default EditButton;
