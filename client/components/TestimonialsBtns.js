import React from 'react';

const TestimonialsBtns = ({ changeBtnStatus, btnStatus }) => (
  <div className='testimonials--btns'>
    <button
      onClick={() => changeBtnStatus('all')}
      className={ btnStatus === 'all' ? 'active' : 'inactive' }
    >
      All
    </button>
    <button
      onClick={() => changeBtnStatus('dog')}
      className={ btnStatus === 'dog' ? 'active' : 'inactive' }
    >
      Dog Owners
    </button>
    <button
      onClick={() => changeBtnStatus('parent')}
      className={ btnStatus === 'parent' ? 'active' : 'inactive' }
    >
      Parents
    </button>
    <button
      onClick={() => changeBtnStatus('commute')}
      className={ btnStatus === 'commute' ? 'active' : 'inactive' }
    >
      Commute
    </button>
  </div>
);

export default TestimonialsBtns;