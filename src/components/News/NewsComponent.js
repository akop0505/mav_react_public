import React, {Component} from  'react';
import product_hover_eye_full from  '../../images/product-hover-eye-full.png';
import cross from  '../../images/cross.png';
import {Link} from 'react-router-dom';

class NewsComponent extends Component {
  render() {
    const {news , more , element} = this.props;
    return (
        <div className="news-content clearfix">
          { news.map((value, key) =>
              <div key={value.id}
                   className="item-product2 col-xs-12 col-sm-4 col-md-4  col-lg-4">
                <div className="item-product news-post">
                  <div className="thumbnail">
                    <Link to={"/news/" + value.id}><span>{ value.multilanguage.content }</span></Link>
                    <Link to={"/news/" + value.id} className="hide-hover-images-product"><img
                        className="group list-group-image"
                        src={product_hover_eye_full} alt=""/></Link>
                    <img src={value.full_img_path}/>
                  </div>
                </div>
              </div>,
          )}
          {more &&
            <div
                className="item-product2 col-xs-12 col-sm-4 col-md-4  col-lg-4">
              <div className="item-product read_more">
                <div className="thumbnail">
                  <Link to={"/news"} ><span>
                    {
                      element.more
                    }
                  </span></Link>
                  <Link to={"/news"} className="hide-hover-images-product">
                    <img className="group list-group-image"
                         src={product_hover_eye_full} alt=""/></Link>
                  <img src={cross}/>
                </div>
              </div>
            </div>
          }
        </div>
    );
  }
}
export default NewsComponent;