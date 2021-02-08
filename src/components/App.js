import React, { useState } from 'react';

import '../styles/App.css';

import SaveButton from './SaveButton';
import EditButton from './EditButton';

function App() {
  const [isEditing, setIsEditing] = useState(true);

  const toggleIsEditing = () => {
    // if isEditing - save, else - start editing
    setIsEditing(!isEditing);
  };

  return (
    <div className='App'>
      {isEditing ? (
        <SaveButton onClick={toggleIsEditing} />
      ) : (
        <EditButton onClick={toggleIsEditing} />
      )}
    </div>
  );
}

export default App;
