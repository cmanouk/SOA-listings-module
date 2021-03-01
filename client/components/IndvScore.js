import React from 'react';
import SvgComponent from './SVG.js';
import svgData from '../svgInformation.js';

const IndvScore = ({ criteria, averageScore }) => (
  <div className="indv-score">
    <div className="indv-score--percentage">
      <div className="indv-score--percentage__icon">
        <SvgComponent
          viewBox="0 0 32 32"
          data={svgData['thumbs up'].data}
          fill={svgData['thumbs up'].fill}
        />
      </div>
      <div className="indv-score--percentage__score">{averageScore}%</div>
    </div>
    <div>
      <SvgComponent
        viewBox="0 0 20 20"
        data={svgData[criteria].data}
        fill={svgData[criteria].fill}
      />
    </div>
    <p className='indv-score--criteria'>{criteria}</p>
  </div>
)

export default IndvScore;