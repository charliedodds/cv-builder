import React, { useState } from 'react';
import '../styles/App.css';

import CVBuilder from './CVBuilder';
import SaveButton from './SaveButton';
import EditButton from './EditButton';

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleIsEditing = () => {
    // if isEditing - save, else - start editing
    setIsEditing(!isEditing);
  };
  return (
    <div className='App'>
      <CVBuilder isEditing={isEditing} />
      {isEditing ? (
        <SaveButton onClick={toggleIsEditing} />
      ) : (
        <EditButton onClick={toggleIsEditing} />
      )}
    </div>
  );
};

export default App;
