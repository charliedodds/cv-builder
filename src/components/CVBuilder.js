import Header from './Header';
import Intro from './Intro';
import Education from './Education';

import '../styles/CVBuilder.css';

function CVBuilder({ isEditing }) {
  return (
    <main className='CVBuilder'>
      <Header isEditing={isEditing} />
      <Intro isEditing={isEditing} />
      <Education isEditing={isEditing} />
      {/* <Experience /> */}
      {/* <Hobbies /> */}
      {/* isEditing ? add own section button */}
    </main>
  );
}

export default CVBuilder;
