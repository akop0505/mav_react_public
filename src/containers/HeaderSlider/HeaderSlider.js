import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getSlides} from '../../actions/Slides';
import Slider from '../../components/Slider/Slider.jsx';


import dark_jpg from '../../images/dark.jpg';
import dark2_jpg from '../../images/dark2.jpg';
import dark3_jpg from '../../images/dark3.jpg';
import ReactLoading from 'react-loading';

class HeaderSlider extends Component {
  componentDidMount() {
    this.props.getSlides();
  }

  render() {
    const { slides , language , elements} = this.props;
    const {slider} = elements.home !== undefined ? elements.home : {slider:[]};

    return (
        <div className="header-slider">
          { Object.keys(slides).length <= 0 ?
              <div className="container-fluid">
                <ReactLoading type="spin" color="#ea212d" height="150px" width="150px" className="loading"/>
              </div> :
              <div className="header-slider-text">
                <h1><span className="slider_mav">MAV</span><span
                    className="slider_ent">ENT</span></h1>
                <h4>{slider[language.currentLng] && slider[language.currentLng].title}</h4>
                <p>{slider[language.currentLng] && slider[language.currentLng].description}</p>
              </div>
          }

          <div className="container-fluid slider-container">
            <Slider slides={slides}/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    elements : state.elements,
    language :state.language,
    slides: state.slides,
  };
};

export default connect(mapStateToProps, {getSlides})(HeaderSlider);