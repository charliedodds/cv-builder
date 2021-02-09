import Header from './Header';
import Intro from './Intro';
import Education from './Education';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';

import '../styles/CVBuilder.css';

function CVBuilder({ isEditing }) {
  return (
    <main className='CVBuilder'>
      <Header isEditing={isEditing} />
      <Intro isEditing={isEditing} />
      <Education isEditing={isEditing} />
      <Experience isEditing={isEditing} />
      <PersonalInfo isEditing={isEditing} />
    </main>
  );
}

export default CVBuilder;
