import React , {Component} from 'react';

class SingleBrand extends Component{
  render (){
    const { brand , importImg } = this.props;
    return(
        <div className="brand-images col-xs-4 col-sm-3 col-md-2  col-lg-2">
          <a target="_blank" href="#"> <img src={importImg(brand,true)} /> </a>
        </div>
    );
  }
}
export default SingleBrand;