import React, {Component} from 'react';
import product_image from '../../images/product-image.jpg';

class ProductSlider extends Component {
  render() {
    const {images, status} = this.props;
    return (
        <div className="single-product-images col-xs-12 col-sm-5 col-md-5  col-lg-5">
          <div className="single-slider slider-container-single">
            <div id="myCarousel3" className="carousel slide"
                 data-ride="carousel">
              <ol className="carousel-indicators">
                { images.map((img, index) =>
                    <li key={index} data-target="#myCarousel3"
                        data-slide-to={index}
                        className={ index===0 && 'active' }/>,
                )}
              </ol>
              <div className="carousel-inner" role="listbox">
                { images.map((img, index) =>
                    <div key={index} className={index===0 ? "item active slider_images" : "item slider_images"}>
                      <img className="group list-group-image"
                           src={img} alt=""/>
                      <span className={status.class}>{status.description}</span>
                    </div>,
                )}
              </div>
            </div>
          </div>
        </div>

    );
  }
}
export default ProductSlider;