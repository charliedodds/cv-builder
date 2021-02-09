const NewJobForm = () => {
  return (
    <form className='NewJobForm'>
      <section className='NewJobForm-job-details'>
        <label htmlFor='NewJobFormTitle'>Job Title</label>
        <input id='NewJobFormTitle' className='NewJobForm-input' />
        <label htmlFor='NewJobFormCompany'>Company</label>
        <input id='NewJobFormCompany' className='NewJobForm-input' />
        <label htmlFor='NewJobFormDescription'>Company Description</label>
        <input id='NewJobFormDescription' className='NewJobForm-input' />
        <label htmlFor='NewJobFormResposibility1'>Job Responsibilities</label>
        <input id='NewJobFormResponsibility1' className='NewJobForm-input' />
        <input id='NewJobFormResponsibility2' className='NewJobForm-input' />
        <input id='NewJobFormResponsibility3' className='NewJobForm-input' />
      </section>
      <section className='NewJobForm-date-details'>
        <label htmlFor='NewJobFormStartDate'>Start date</label>
        <input id='NewJobFormStartDate' className='NewJobForm-input' />
        <label htmlFor='NewJobFormEndDate'>End date</label>
        <input id='NewJobFormEndDate' className='NewJobForm-input' />
      </section>
    </form>
  );
};

export default NewJobForm;
