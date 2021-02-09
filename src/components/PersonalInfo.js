import React, { useState } from 'react';

import '../styles/PersonalInfo.css';

const PersonalInfo = ({ isEditing }) => {
  const [personalInfo, setPersonalInfo] = useState(
    "Personal Info - use this section to add anything else you'd like the reader to know, such as hobbies and interests."
  );

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo(e.target.value);
  };

  return (
    <section className='PersonalInfo'>
      {isEditing ? (
        <form className='PersonalInfo-form'>
          <label htmlFor='personalInfoInput'>Personal Info</label>
          <textarea
            id='personalInfoInput'
            value={personalInfo}
            className='PersonalInfo-input'
            rows='5'
            cols='30'
            onChange={handlePersonalInfoChange}
          ></textarea>
        </form>
      ) : (
        <p className='PersonalInfo-para'>{personalInfo}</p>
      )}
    </section>
  );
};

export default PersonalInfo;
