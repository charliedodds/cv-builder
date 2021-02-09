import '../styles/Job.css';

const Job = ({ isEditing, job, handleDeleteClick }) => {
  return (
    <section className='Job'>
      <section>
        <h4 className='Job-title'>{job.title}</h4>
        <h5 className='Job-company'>{job.company}</h5>
        <p className='Job-description'>{job.description}</p>
        <ul className='Job-list'>
          {job.responsibilities.map((responsibility, idx) => (
            <li className='Job-list-item' key={idx}>
              {responsibility}
            </li>
          ))}
        </ul>
      </section>
      <section className='Job-container'>
        <p className='Job-dates'>
          {job.startDate} - {job.endDate}
        </p>
        {isEditing ? (
          <button className='Job-delete' onClick={handleDeleteClick}>
            <i className='fa fa-trash'></i>
          </button>
        ) : null}
      </section>
    </section>
  );
};

export default Job;
