import React, { useState } from 'react';

import '../styles/Education.css';

const Education = ({ isEditing }) => {
  const [uni, setUni] = useState('University');
  const [subject, setSubject] = useState('Subject');
  const [grade, setGrade] = useState('Grade');
  const [startDate, setStartDate] = useState('2000');
  const [endDate, setEndDate] = useState('2020');

  const handleUniChange = (e) => {
    setUni(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <section className='Education'>
      <h3 className='Education-title'>Education</h3>
      {isEditing ? (
        <form className='Education-form'>
          <section className='Education-subject-details'>
            <label htmlFor='uniInput'>University</label>
            <input
              id='uniInput'
              value={uni}
              className='Education-input'
              onChange={handleUniChange}
            />
            <label htmlFor='subjectInput'>Subject</label>
            <input
              id='subjectInput'
              value={subject}
              className='Education-input'
              onChange={handleSubjectChange}
            />
            <label htmlFor='gradeInput'>Grade</label>
            <input
              id='gradeInput'
              value={grade}
              className='Education-input'
              onChange={handleGradeChange}
            />
          </section>
          <section className='Education-date-details'>
            <label htmlFor='startDateInput'>Start date</label>
            <input
              id='startDateInput'
              value={startDate}
              className='Education-input'
              onChange={handleStartDateChange}
            />
            <label htmlFor='endDateInput'>End date</label>
            <input
              id='endDateInput'
              value={endDate}
              className='Education-input'
              onChange={handleEndDateChange}
            />
          </section>
        </form>
      ) : (
        <>
          <section className='Education-container'>
            <section className='Education-subject-details'>
              <h4 className='Education-uni'>{uni}</h4>
              <h5 className='Education-subject'>
                {subject} - {grade}
              </h5>
            </section>
            <section className='Education-date-details'>
              <p className='Education-dates'>
                {startDate} - {endDate}
              </p>
            </section>
          </section>
        </>
      )}
    </section>
  );
};

export default Education;
