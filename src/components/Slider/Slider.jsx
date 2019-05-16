import React from 'react';
export default function Slider(props) {
  return <div id="myCarousel"
              className="carousel slide slider-margin"
              data-ride="carousel">
    <ol className="carousel-indicators">
      { props.slides.list && props.slides.list.map((v, i) =>
          <li key={ i }
              data-target="#myCarousel"
              data-slide-to={ i }
              className={ i === 0 && 'active' }>
          </li>)
      }
    </ol>
    <div className="carousel-inner slider-height-vh" role="listbox">
      {props.slides.list && props.slides.list.map(
          (value, index) =>
              <div key={ index }
                   className={ index === 0
                       ? 'item active slider_images'
                       : 'item slider_images' } >
                <img src={ value.img_full_path } alt="Chania"  />
              </div>)
      }
      <a className="left carousel-control" href="#myCarousel"
         role="button" data-slide="prev">
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel"
         role="button" data-slide="next">
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>;
}