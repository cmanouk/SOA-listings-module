import React from 'react';
import moment from 'moment';
import SvgComponent from './SVG.js';
import svgData from '../svgInformation.js';

const IndvTestimonial = ({ color, testimonial, cityName, renderModalById, updateLikeCount, modal }) => {
  const { author, commuter, created_at, dog_owner, home_city, likes, parent, post, id } = testimonial;

  return (
    <div
      className='testimonials--reviews__card'
      style={modal ? {background: `rgb(${color})`, cursor: 'default'} : {background: `rgb(${color})`}}
      onClick={renderModalById ? () => renderModalById(id, color) : null}
    >
      <div
        className='testimonials--reviews__card-gradient'
        style={{
          background: `linear-gradient(rgba(${color}, 0), rgba(${color}, 1))`
        }}
      >
      </div>
      <div className='card--header'>
        <div className='card--header__img'>
          <SvgComponent
            viewBox='0 0 32 32'
            fill={svgData['user'].fill}
            data={svgData['user'].data}
          />
        </div>
        <div className='card--header__info'>
          <h6>{`${author.split(' ')[0]} ${author.split(' ')[1][0]}.`}</h6>
          <div>
            <span>{cityName === home_city ? 'Resident' : 'Visitor'}</span>
            <span className='card--header__crcl'>•</span>
            <span>
              {moment(created_at).fromNow()
                .replace('weeks', 'wk')
                .replace('a week', '1 wk')
                .replace('months', 'mo')
                .replace('a month', '1 mo')
                .replace('years', 'y')
                .replace('a year', '1 y')}
            </span>
          </div>
        </div>
      </div>
      <div className='card--body'>
        <em>"{post}"</em>
      </div>
      <div className='card--stats'>
        <div className='card--stats__likes' onClick={(e) => updateLikeCount(id, e)}>
          <div className='what-locals-say-anchor' href="#">
            <SvgComponent
              viewBox='0 0 20 20'
              data={svgData['smilee'].data}
              fill={svgData['smilee'].fill}
            />
          </div>
          <p style={{color: 'white', marginLeft: '10px'}}>
            {likes}
          </p>
        </div>
        <p>
          <a className='what-locals-say-anchor' href="#" style={{color: 'white'}}>
            Flag
          </a>
        </p>
      </div>
    </div>
  )
}

export default IndvTestimonial;