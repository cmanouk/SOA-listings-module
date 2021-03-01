import React, { useState } from 'react';
import IndvTestimonial from './IndvTestimonial.js';
import SvgComponent from './SVG.js';
import svgData from '../svgInformation.js';

const ModalSingle = ({ testimonialInfo, closeModals, updateLikeCount }) => {
  const { testimonial, color, cityName } = testimonialInfo;
  const [fill, setColor] = useState(color);

  return (
    <div
      className='modal--testimonials'
      onClick={closeModals}
    >
      <div className='modal-single' onClick={(e) => e.stopPropagation()}>
        <div
          className='x-btn'
          onMouseDown={() => setColor("#FFFFFF")}
          onMouseUp={() => setColor(color)}
          onClick={closeModals}
        >
          <SvgComponent
            viewBox={'0 0 32 32'}
            data={svgData['x-btn'].data}
            fill={fill}
          />
        </div>
        <IndvTestimonial
          color={color}
          testimonial={testimonial}
          cityName={cityName}
          updateLikeCount={updateLikeCount}
          modal={true}
        />
      </div>
    </div>
  );
};

export default ModalSingle;