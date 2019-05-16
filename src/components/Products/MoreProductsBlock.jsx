import React from 'react';
import { Link } from 'react-router-dom';
import product_hover_eye_full from '../../images/product-hover-eye-full.png';
import cross from '../../images/cross.png';

export default function MoreProductsBlock(props) {
  const {element} = props;
  return(<div className="item-product2 col-xs-12 col-sm-4 col-md-4  col-lg-4">
    <div className="item-product read_more">
      <div className="thumbnail">
        <a href="items-all.html" >
          <span>{element.more}</span></a>
        <Link to={"products"}className="hide-hover-images-product">
          <img className="group list-group-image" src={product_hover_eye_full} alt="" />
        </Link>
        <img src={ cross }/>
      </div>
    </div>
  </div>);
}