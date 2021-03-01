import React from 'react';
import axios from 'axios';
import CityScores from './CityScores.js';
import Testimonials from './Testimonials.js';
import ModalSingle from './ModalSingle.js';
import ModalAll from './ModalAll.js';

class ScoresApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: 'Houston',
      testimonials: [],
      modalDisplaySingle: false,
      modalDisplayAll: false,
      colorPalette: ['0, 173, 187', '250, 140, 104', '206, 182, 255', '116, 6, 49', '242, 196, 48', '5, 34, 134', '255, 94, 63']
    }

    this.renderModalById = this.renderModalById.bind(this);
    this.closeModals = this.closeModals.bind(this);
    this.renderModalAll = this.renderModalAll.bind(this);
    this.updateLikeCount = this.updateLikeCount.bind(this);
  }

  renderModalById(id, color) {
    const testimonial = this.state.testimonials.find((t) => t.id === id);
    this.setState({
      modalDisplayAll: false,
      modalDisplaySingle: {
        testimonial,
        color,
        cityName: this.props.cityName
      }
    });
  }

  renderModalAll() {
    this.setState({
      modalDisplayAll: true
    })
  }

  closeModals() {
    this.setState({
      modalDisplaySingle: false,
      modalDisplayAll: false
    });
  }

  updateLikeCount(id, e) {
    e.stopPropagation();
    const testimonials = [...this.state.testimonials];
    const testimonial = testimonials.find((t) => id === t.id);
    if (testimonial.clicked) {
      testimonial.likes--;
      testimonial.clicked = false;
    } else {
      testimonial.likes++;
      testimonial.clicked = true;
    };
    this.setState({
      testimonials
    });
  }

  componentDidMount() {
    axios.get('http://50.18.69.64/api/testimonials')
      .then((result) => {
        const fetchedTestimonials = result.data.sort((a, b) => b.created_at - a.created_at);
        // adding click func simply for non-persistent updating of likes (would req user information)
        const testimonials = fetchedTestimonials.map((t) => {
          t.clicked = false;
          return t;
        });
        this.setState({
          testimonials
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className='city-scores-testimonials-view'>
        {
          this.state.modalDisplaySingle ?
          <ModalSingle
            testimonialInfo={this.state.modalDisplaySingle}
            closeModals={this.closeModals}
            updateLikeCount={this.updateLikeCount}
          /> :
          this.state.modalDisplayAll ?
          <ModalAll
            cityName={this.state.city}
            colorPalette={this.state.colorPalette}
            testimonials={this.state.testimonials}
            renderModalById={this.renderModalById}
            closeModals={this.closeModals}
            updateLikeCount={this.updateLikeCount}
          /> :
          null
        }
        <div className='what-locals-say'>
          <CityScores
            cityName={this.state.city}
            colorPalette={this.state.colorPalette}
          />
          <Testimonials
            cityName={this.state.city}
            colorPalette={this.state.colorPalette}
            testimonials={this.state.testimonials}
            renderModalById={this.renderModalById}
            renderModalAll={this.renderModalAll}
            updateLikeCount={this.updateLikeCount}
          />
        </div>
      </div>

    )
  }
}

export default ScoresApp;