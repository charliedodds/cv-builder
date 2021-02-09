import React, { useState } from 'react';

import Header from './Header';
import SaveButton from './SaveButton';
import EditButton from './EditButton';

import '../styles/CVBuilder.css';

function CVBuilder() {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    // if isEditing - save, else - start editing
    setIsEditing(!isEditing);
  };

  return (
    <main className='CVBuilder'>
      <Header isEditing={isEditing} />
      {/* <Intro/Summary /> */}
      {/* <Education /> */}
      {/* <Experience /> */}
      {/* <Hobbies /> */}
      {/* isEditing ? add own section button */}
      {isEditing ? (
        <SaveButton onClick={toggleIsEditing} />
      ) : (
        <EditButton onClick={toggleIsEditing} />
      )}
    </main>
  );
}

export default CVBuilder;
