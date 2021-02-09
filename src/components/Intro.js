import React, { useState } from 'react';

import '../styles/Intro.css';

const Intro = ({ isEditing }) => {
  const [intro, setIntro] = useState(
    'Intro - write some brief, general information about yourself, highlighting your skills and why you fit the role.'
  );

  const handleIntroChange = (e) => {
    setIntro(e.target.value);
  };

  return (
    <section className='Intro'>
      {isEditing ? (
        <form className='Intro-form'>
          <label htmlFor='introInput'>Intro</label>
          <textarea
            id='introInput'
            value={intro}
            className='Intro-input'
            rows='8'
            cols='30'
            onChange={handleIntroChange}
          ></textarea>
        </form>
      ) : (
        <p className='Intro-para'>{intro}</p>
      )}
    </section>
  );
};

export default Intro;
