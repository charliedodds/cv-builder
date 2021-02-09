import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import '../styles/NewJobForm.css';

const NewJobForm = ({ jobs, setJobs }) => {
  const [newTitle, setNewTitle] = useState('Title');
  const [newCompany, setNewCompany] = useState('Company');
  const [newCompanyDescription, setNewCompanyDescription] = useState(
    'Brief company description'
  );
  const [newJobResponsibility1, setNewJobResponsibility1] = useState(
    'First responsibility'
  );
  const [newJobResponsibility2, setNewJobResponsibility2] = useState(
    'Second responsibility'
  );
  const [newJobResponsibility3, setNewJobResponsibility3] = useState(
    'Third responsibility'
  );
  const [newStartDate, setNewStartDate] = useState('YYYY');
  const [newEndDate, setNewEndDate] = useState('YYYY');

  const handleNewTitleChange = (e) => {
    setNewTitle(e.target.value);
  };
  const handleNewCompanyChange = (e) => {
    setNewCompany(e.target.value);
  };
  const handleNewCompanyDescriptionChange = (e) => {
    setNewCompanyDescription(e.target.value);
  };
  const handleNewJobResponsibility1Change = (e) => {
    setNewJobResponsibility1(e.target.value);
  };
  const handleNewJobResponsibility2Change = (e) => {
    setNewJobResponsibility2(e.target.value);
  };
  const handleNewJobResponsibility3Change = (e) => {
    setNewJobResponsibility3(e.target.value);
  };
  const handleNewStartDateChange = (e) => {
    setNewStartDate(e.target.value);
  };
  const handleNewEndDateChange = (e) => {
    setNewEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobs([
      ...jobs,
      {
        title: newTitle,
        company: newCompany,
        description: newCompanyDescription,
        responsibilities: [
          newJobResponsibility1,
          newJobResponsibility2,
          newJobResponsibility3,
        ],
        startDate: newStartDate,
        endDate: newEndDate,
        id: uuidv4(),
      },
    ]);
    setNewTitle('Title');
    setNewCompany('Company');
    setNewCompanyDescription('Brief company descriptio');
    setNewJobResponsibility1('First responsibility');
    setNewJobResponsibility2('Second responsibility');
    setNewJobResponsibility3('Third responsibility');
    setNewStartDate('YYYY');
    setNewEndDate('YYYY');
  };

  return (
    <form className='NewJobForm' onSubmit={handleSubmit}>
      <section className='NewJobForm-container'>
        <label htmlFor='NewJobFormTitle'>Job Title</label>
        <input
          id='NewJobFormTitle'
          className='NewJobForm-input'
          required
          value={newTitle}
          onChange={handleNewTitleChange}
        />
        <label htmlFor='NewJobFormCompany'>Company</label>
        <input
          id='NewJobFormCompany'
          className='NewJobForm-input'
          required
          value={newCompany}
          onChange={handleNewCompanyChange}
        />
        <label htmlFor='NewJobFormDescription'>Company Description</label>
        <input
          id='NewJobFormDescription'
          className='NewJobForm-input'
          required
          value={newCompanyDescription}
          onChange={handleNewCompanyDescriptionChange}
        />
        <label htmlFor='NewJobFormResposibility1'>Job Responsibilities</label>
        <input
          id='NewJobFormResponsibility1'
          className='NewJobForm-input'
          required
          value={newJobResponsibility1}
          onChange={handleNewJobResponsibility1Change}
        />
        <input
          id='NewJobFormResponsibility2'
          className='NewJobForm-input'
          required
          value={newJobResponsibility2}
          onChange={handleNewJobResponsibility2Change}
        />
        <input
          id='NewJobFormResponsibility3'
          className='NewJobForm-input'
          required
          value={newJobResponsibility3}
          onChange={handleNewJobResponsibility3Change}
        />
      </section>
      <section className='NewJobForm-container'>
        <label htmlFor='NewJobFormStartDate'>Start date</label>
        <input
          id='NewJobFormStartDate'
          className='NewJobForm-input'
          required
          placeholder='YYYY'
          value={newStartDate}
          onChange={handleNewStartDateChange}
        />
        <label htmlFor='NewJobFormEndDate'>End date</label>
        <input
          id='NewJobFormEndDate'
          className='NewJobForm-input'
          required
          placeholder='YYYY'
          value={newEndDate}
          onChange={handleNewEndDateChange}
        />
        <button className='NewJobForm-submit'>Add Job</button>
      </section>
    </form>
  );
};

export default NewJobForm;
