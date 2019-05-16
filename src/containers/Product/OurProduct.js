import React, {Component} from 'react';
import {connect} from 'react-redux';
import our_product_logo from '../../images/3.png';
import TypesComponent from '../../components/Types/TypesComponent';
import {getTypes} from '../../actions/Types';
import {withCookies, Cookies} from 'react-cookie';

class OurProduct extends Component {
  componentDidMount() {
    this.props.getTypes();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.language.currentLng !== this.props.language.currentLng ){
      this.props.getTypes();
    }
  }

  render() {
    const {types , elements ,language} = this.props;
    const {product} = elements.home !== undefined ? elements.home : {product:[]};
    return (
        <div className="our-product">
          <div className="container">
            <div className="row">
              <div className="our-name">
                <img src={our_product_logo}/>
                <h2>{product[language.currentLng] && product[language.currentLng].title }</h2>
              </div>
            </div>
          </div>
          { types.list && <TypesComponent types={types.list} more={true} element={product[language.currentLng]} /> }
        </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    language : state.language,
    elements:state.elements,
    types: state.types,
  };
};
export default connect(mapStateToProps, {getTypes})(withCookies(OurProduct));