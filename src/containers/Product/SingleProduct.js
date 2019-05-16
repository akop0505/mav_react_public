import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProduct, getProducts, downloadPdf} from '../../actions/Products';
import  ProductSlider from '../../components/Products/ProductSlider';
import  SingleProductContentComponent from '../../components/Products/SingleProductContentComponent';
import  ProductComponent from '../../components/Products/ProductComponent';
import ReactLoading from 'react-loading';
import {getElements} from '../../actions/Elements';

const style = require('classnames/bind').bind(
    require('../../ContainerStyles.css'));

function LoadData(self) {
  const {match} = self.props;
  self.props.getProduct(match.params.id);
  self.props.getProducts();
  window.scrollTo(0, 0);
}
class SingleProduct extends Component {
  componentWillMount() {
    this.props.getElements(
        {alias: 'product', sub_alias: 'single_product_page'});
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.language.currentLng !== this.props.language.currentLng ){
      LoadData(this);
    }
  }
  componentDidMount() {
    LoadData(this);
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.id;
    const currentId = this.props.match.params.id;
    if (prevId !== currentId) {
      LoadData(this);
    }
  }

  render() {
    const {product, products, language, elements} = this.props;
    const {images_full_paths} = product;
    const single_product_element = elements.single_product_page !== undefined
        ? elements.single_product_page.product
        : {};

    return (
        <div className="single clearfix">
          <div className="container-fluid">
            <div className="row">
              <div className="single-product clearfix">
                <ProductSlider images={images_full_paths || []}
                               status={ product.status_current_lng || []}/>
                {Object.keys(product).length !== 0
                    ? <SingleProductContentComponent product={product}
                                                     element={single_product_element[language.currentLng] || {}}
                    />
                    : <div className="container-fluid">
                      <ReactLoading type="spin" color="#ea212d" height="150px"
                                    width="150px"
                                    className={style('container_loading')}/>
                    </div>
                }
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="facade-name col-lg-12">
                <h4>{single_product_element[language.currentLng] &&
                single_product_element[language.currentLng].other}</h4>
                <hr className="hr_border"/>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          {products.length ?
              <ProductComponent products={products} more={false}/> :
              <div className="container-fluid">
                <img src="" alt=""/>
                <ReactLoading type="cylon" color="#ea212d" height="150px"
                              width="150px" className="loading"/>
              </div>
          }
        </div>);
  }
}
const mapStateToProps = (state, props) => {
  const {product} = state.products;
  const {list} = state.products;
  return {
    product: product || {},
    products: list || [],
    language: state.language,
    elements: state.elements,

  };
};
export default connect(mapStateToProps, {getProduct, getProducts, getElements})(
    SingleProduct);