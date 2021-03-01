import React from 'react';
import IndvScore from './IndvScore.js';
import axios from 'axios';

class CityScores extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityScores: [],
      defaultDisplay: [],
      displayAll: false,
      smallestCriteriaCount: null
    };

    this.toggleDisplayAll = this.toggleDisplayAll.bind(this);
  }

  toggleDisplayAll() {
    this.setState({
      displayAll: !this.state.displayAll
    })
  }

  componentDidMount() {
    axios.get(`http://50.18.69.64/api/city_scores/${this.props.cityName}`)
      .then((result) => {
        const { criteriasArray, smallestCriteriaCount } = result.data;
        const sortedCriterias = criteriasArray.sort((a, b) => b.averageScore - a.averageScore);
        const defaultDisplay = criteriasArray.slice(0, 6);
        this.setState({
          cityScores: criteriasArray,
          defaultDisplay,
          smallestCriteriaCount
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    let displayedScores = this.state.displayAll ?
                          this.state.cityScores :
                          this.state.defaultDisplay;

    return (
      <div>
        <h3>What locals say about {this.props.cityName}</h3>
        <p>At least {this.state.smallestCriteriaCount} voted on each feature.</p>
        <div className='city-scores-container'>
          {displayedScores.map((cityScore, index) => (
            <IndvScore
              key={index}
              criteria={cityScore.criteria}
              averageScore={cityScore.averageScore}
            />
          ))}
        </div>
        <button
          className={`city-scores-container--btn${this.state.displayAll ? ' see-less' : ''}`}
          onClick={this.toggleDisplayAll}
        >
          {this.state.displayAll ? 'See Less' : 'See All'}
        </button>
        <p className='learn-more'>
          <a className='what-locals-say-anchor' href='#'>Learn more</a> about our methodology.
        </p>
      </div>

    )
  }
};

export default CityScores;