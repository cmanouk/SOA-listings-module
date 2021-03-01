import React, { useState } from 'react';
import IndvTestimonial from './IndvTestimonial.js';
import TestimonialsBtns from './TestimonialsBtns.js';
import SvgComponent from './SVG.js';
import svgData from '../svgInformation.js';

const ModalAll = ({
  testimonials, closeModals, colorPalette, renderModalById, cityName, updateLikeCount
}) => {
  const [fill, setColor] = useState('#869099');
  const [btnStatus, changeBtnStatus] = useState('all');
  let filteredCards;
  if (btnStatus === 'all') filteredCards = testimonials;
  if (btnStatus === 'dog') filteredCards = testimonials.filter((t) => t.dog_owner);
  if (btnStatus === 'parent') filteredCards = testimonials.filter((t) => t.parent);
  if (btnStatus === 'commute') {
    filteredCards = testimonials.filter((t) => {
      return t.commuter && t.home_city === cityName
    });
  };

  return (
    <div
      className='modal--testimonials'
      onClick={closeModals}
    >
      <div className='modal-all' onClick={(e) => e.stopPropagation()}>
        <div
          className='x-btn'
          onMouseDown={() => setColor("#FFFFFF")}
          onMouseUp={() => setColor('#869099')}
          onClick={closeModals}
        >
          <SvgComponent
            viewBox={'0 0 32 32'}
            data={svgData['x-btn'].data}
            fill={fill}
          />
        </div>
        <TestimonialsBtns
          changeBtnStatus={changeBtnStatus}
          btnStatus={btnStatus}
        />
        <div className='modal-all--testimonials'>
          {filteredCards.map((t, index) => {
            const color = colorPalette[index % colorPalette.length];
            return <IndvTestimonial
                    key={index}
                    color={color}
                    testimonial={t}
                    cityName={cityName}
                    renderModalById={renderModalById}
                    updateLikeCount={updateLikeCount}
                  />
          })}
        </div>
      </div>
    </div>
  )
};

export default ModalAll;