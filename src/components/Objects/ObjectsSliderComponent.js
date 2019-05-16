import React, {Component} from 'react';
import our_object_slider from '../../images/our-object-slider.jpg';
import slider_arrow_left from '../../images/slider-arrow-left.png';
import slider_arrow_right from '../../images/slider-arrow-right.png';

class ObjectsSliderComponent extends Component {
  render() {
    const { images } = this.props;
    return (
        <div className="container slider-container">
          <div id="myCarousel2" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              {images.map((value,index) =>
                  <li data-target="#myCarousel2" data-slide-to={index}
                      className={ index === 0 && 'active' } key={index}/>,
              )}
            </ol>
            <div className="carousel-inner carousel-inner2" role="listbox">
              {images.map((value,index) =>
                  <div className={index === 0
                      ? 'item slider_images active'
                      : 'item slider_images'} key={index}>
                    <img src={value} alt="Chania" width="460"
                         height="345"/>
                  </div>,
              )}
            </div>
            <a className="prev_a carousel-control" href="#myCarousel2"
               role="button" data-slide="prev">
              <img className="prev-img glyphicon-chevron-left"
                   src={ slider_arrow_left } alt="Previous"/>
            </a>
            <a className="next_a right carousel-control" href="#myCarousel2"
               role="button" data-slide="next">
              <img className="next-img glyphicon-chevron-right"
                   src={ slider_arrow_right } alt="Previous"/>
            </a>
          </div>
        </div>
    );
  }
}
export default ObjectsSliderComponent;