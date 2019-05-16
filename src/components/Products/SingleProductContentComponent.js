import React, {Component} from 'react';
import SocialSitesComponent from '../../components/Tools/SocialSitesComponent';
import Forma_bot from '../../images/Forma-bot.png';

class SingleProductContentComponent extends Component {
  render() {
    const {product,element} = this.props;
    return (
        <div
            className="single-product-content col-xs-12 col-sm-7 col-md-7  col-lg-7">
          <div className="single-content">
            <div className="single-header-content clearfix">
              <div
                  className="single-header col-xs-12 col-sm-9 col-md-9  col-lg-9">
                <span>{product.available_current_lng.description}</span>
                <h1>{product.title} </h1>
                <p>{ product.short_description}</p>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3  col-lg-3">
                <SocialSitesComponent/>
              </div>
            </div>

            <div className="single-description">
              <section dangerouslySetInnerHTML={{__html: product.long_description}}/>
            </div>
            <div className="single-bottom-text"><img src=""/>
              <a href={"http://mavent.local/api/product/download-pdf?pdf="+product.pdf}><img src={Forma_bot}/>{element.pdf_btn}
              </a>
            </div>
          </div>
        </div>
    );
  }
}
export default SingleProductContentComponent;