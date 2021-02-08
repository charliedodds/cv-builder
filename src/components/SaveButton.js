import React from 'react';

import '../styles/SaveButton.css';

const SaveButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className='SaveButton'>
      Save
    </button>
  );
};

export default SaveButton;
