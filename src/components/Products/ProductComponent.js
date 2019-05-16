import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import product_hover_eye_full from '../../images/product-hover-eye-full.png';
import cross from '../../images/cross.png';
import MoreProductsBlock from '../../components/Products/MoreProductsBlock';

class ProductsComponent extends Component {
  render() {
    const {products , more ,element } = this.props;
    return (
        <div className="container" >
          <div className="row">
            <div className="product clearfix">
              {
                products.map((value)=>
                    <div className="item-product2 col-xs-12 col-sm-4 col-md-4  col-lg-4" key={value.id}>
                      <div className="item-product">
                        <div className="thumbnail">
                          <Link to={"/product/" + value.id} className="hide-hover-images">
                            <img className="group list-group-image" src={product_hover_eye_full} alt="" />
                          </Link>
                          <Link to={"/product/" + value.id}>
                            { value.status_current_lng &&  <span className={ value.status_current_lng.class }>{value.status_current_lng.description}</span>}
                            <img className="group list-group-image" src={ value.full_img_path} alt="" />
                          </Link>
                        </div>
                        <div className="product-text">
                          <p>{ value.multilanguage.short_description }</p>
                        </div>
                        <div className="product-title">
                          <h1 className="product-title">
                            <Link to={"/product/" + value.id}>{ value.multilanguage.title }</Link>
                          </h1>
                        </div>
                      </div>
                    </div>)
              }
              {more && <MoreProductsBlock element={element}/>}
            </div>
          </div>
        </div>
    );
  }
}

export default ProductsComponent;