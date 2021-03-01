import React from 'react';

const SvgComponent = ({ viewBox, data, fill }) => (
  <div className={viewBox === '0 0 32 32' ? 'thirty-svg' : 'twenty-svg'}>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox={viewBox}>
      <path d={data} fill={fill}></path>
    </svg>
  </div>
)

export default SvgComponent;