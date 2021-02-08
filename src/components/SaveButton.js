import React from 'react';

import '../styles/SaveButton.css';

const SaveButton = (props) => {
  return (
    <button onClick={props.onClick} className='SaveButton'>
      Save
    </button>
  );
};

export default SaveButton;
