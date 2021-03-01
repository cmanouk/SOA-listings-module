import React from 'react';
import axios from 'axios';
import TestimonialsBtns from './TestimonialsBtns.js';
import IndvTestimonial from './IndvTestimonial';
import SvgComponent from './SVG.js';
import svgData from '../svgInformation.js';
import ScrollBtns from './ScrollBtns.js';

class Testimonials extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btnStatus: 'all',
      displayStatus: 'first4'
    };

    this.changeBtnStatus = this.changeBtnStatus.bind(this);
    this.changeDisplayStatus = this.changeDisplayStatus.bind(this);
  }

  changeBtnStatus(btn) {
    this.setState({
      btnStatus: btn,
      displayStatus: 'first4'
    });
  }

  changeDisplayStatus(status) {
    setTimeout(() => {
      this.setState({
        displayStatus: status
      })
    }, 200);
  }



  render() {
    const { btnStatus } = this.state;
    const { testimonials, cityName, renderModalById, updateLikeCount } = this.props;
    const colorPalette = this.props.colorPalette;
    // btnsStatuses === dog, parent, commute, all
    let filteredCards;
    if (btnStatus === 'all') filteredCards = testimonials;
    if (btnStatus === 'dog') filteredCards = testimonials.filter((t) => t.dog_owner);
    if (btnStatus === 'parent') filteredCards = testimonials.filter((t) => t.parent);
    if (btnStatus === 'commute') {
      filteredCards = testimonials.filter((t) => {
        return t.commuter && t.home_city === this.props.cityName
      });
    };
    const displayCards = filteredCards.slice(0, 8);
    const remainingCards = filteredCards.length - displayCards.length;

    return (
      <div className='testimonials'>
        {
          displayCards.length ?
          <ScrollBtns
            changeDisplayStatus={this.changeDisplayStatus}
            displayStatus={this.state.displayStatus}
            remainingCards={remainingCards}
            renderModalAll={this.props.renderModalAll}
            cardCount={displayCards.length}
          /> :
          null
        }
        <TestimonialsBtns
          changeBtnStatus={this.changeBtnStatus}
          btnStatus={this.state.btnStatus}
        />
        <div
          className='testimonials--reviews'
          style={
            this.state.displayStatus === 'first4' ?
            null :
            { marginLeft: '-103%' }
          }
        >
          {
            displayCards.map((testimonial, index) => {
              const color = colorPalette[index % colorPalette.length];
              return <IndvTestimonial
                      key={index}
                      color={color}
                      testimonial={testimonial}
                      cityName={cityName}
                      renderModalById={renderModalById}
                      updateLikeCount={updateLikeCount}
                     />
            })
          }
        </div>
      </div>
    )
  }
};

export default Testimonials;