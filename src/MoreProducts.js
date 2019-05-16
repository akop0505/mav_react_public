import React, {Component} from 'react';
import {connect} from 'react-redux';
import our_product_logo from './images/3.png';
import TypesComponent from './components/Types/TypesComponent';
import {getTypes} from './actions/Types';
import {getElements} from './actions/Elements';
import ReactLoading from 'react-loading';
import { withCookies } from 'react-cookie';

const style = require('classnames/bind').bind(
    require('./ContainerStyles.css')
);

class MoreProducts extends Component {
  componentWillMount(){
    const params = {
      alias :'product',
      sub_alias: 'product_page'
    };
    this.props.getElements(params);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.language.currentLng !== this.props.language.currentLng ){
      this.props.getTypes();
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getTypes();
  }
  render() {
    const {types, language ,elements } = this.props;
    const product_element = elements.product_page !== undefined ? elements.product_page.product : {};
    return (
        <div className="our-product">
          {product_element[language.currentLng] && <div className="container">
            <div className="row">
              <div className="our-name-all">
                <img src={our_product_logo}/>
                <h2>{product_element[language.currentLng].title}</h2>
              </div>
              <div className="our-text-all" dangerouslySetInnerHTML={{ __html: product_element[language.currentLng].welcome_text}}>
              </div>
            </div>
          </div> }
          { types.list ? <TypesComponent types={types.list} more={false} element={product_element[language.currentLng] || []}/> :
              <div className={"container-fluid"}>
                <ReactLoading type="spin" color="#ea212d" height="150px" width="150px" className={style('container_loading')}/>
              </div>
          }
        </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    types: state.types,
    language : state.language,
    elements : state.elements
  };
};
export default connect(mapStateToProps, {getTypes,getElements})(withCookies(MoreProducts));