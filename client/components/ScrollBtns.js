import React from 'react';
import SvgComponent from './SVG.js';
import svgData from '../svgInformation.js';

class ScrollBtns extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fillLeft: svgData['left-scroll'].fill,
      fillRight: svgData['right-scroll'].fill
    };

    this.changeFillColor = this.changeFillColor.bind(this);
  }

  changeFillColor(fillDirection, color) {
    this.setState({
      [fillDirection]: color
    });
  }

  render() {
    const { displayStatus, remainingCards, changeDisplayStatus, renderModalAll, cardCount } = this.props;
    const { fillLeft, fillRight } = this.state;
    const first4 = displayStatus === 'first4';

    return (
      <div>
        <div
          style={first4 ? { display: 'none' } : null}
          className='left-scroll scroll-btn'
          onClick={() => changeDisplayStatus('first4')}
          onMouseDown={() => this.changeFillColor('fillLeft', '#FFFFFF')}
          onMouseUp={() => this.changeFillColor('fillLeft', svgData['left-scroll'].fill)}
        >
          <SvgComponent
            data={svgData['left-scroll'].data}
            fill={fillLeft}
            viewBox={'0 0 32 32'}
          />
        </div>
        <div
          style={cardCount <= 4 || !first4 && !remainingCards ? { display: 'none' } : null}
          className='right-scroll scroll-btn'
          onClick={
            first4 ?
            () => changeDisplayStatus('last4') :
            () => renderModalAll()
          }
          onMouseDown={() => this.changeFillColor('fillRight', '#FFFFFF')}
          onMouseUp={() => this.changeFillColor('fillRight', svgData['right-scroll'].fill)}
        >
          {
            first4 ?
            <SvgComponent
              data={svgData['right-scroll'].data}
              fill={fillRight}
              viewBox={'0 0 32 32'}
            /> :
            <span>+{remainingCards}</span>
          }
        </div>
      </div>
    )
  }
};

export default ScrollBtns;