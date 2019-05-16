import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import product_hover_eye_full from '../../images/product-hover-eye-full.png';

class ObjectsComponent extends Component{
  render(){
    const {objects}=this.props;

    return(
        <div className="object-content clearfix">
          { objects.map((value,index)=>
              <div className="item-product2 col-xs-12 col-sm-4 col-md-4  col-lg-4" key={index}>
                <div className="item-product news-post">
                  <div className="thumbnail">
                    <a href="#" >
                      <span>
                        {value.multilanguage.title}
                      </span>
                    </a>
                    <Link to={"/object/" + value.id} className="hide-hover-images-product">
                      <img className="group list-group-image" src={product_hover_eye_full} alt="" />
                    </Link>
                    <img src={value.images[0]}/>
                    <span className="object-bottom">{value.size + "M2"} </span>
                  </div>
                </div>
              </div>
          )}
        </div>
    );
  }
}
export default ObjectsComponent;