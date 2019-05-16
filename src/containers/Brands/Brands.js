import React , { Component } from 'react';
import SingleBrand from '../../components/Brands/SingleBrand';

const importImg = require.context('../../images', false, /\.(png|jpe?g|svg)$/);
const images = [
  './brand2.jpg',
  './brand3.jpg',
  './brand4.jpg',
  './brand5.jpg',
  './brand6.jpg',
  './brand7.jpg',
  './brand8.jpg',
  './brand9.jpg',
  './brand10.jpg',
  './brand11.jpg',
  './brand12.jpg'
];

class Brands extends Component {
  render (){
    return(
        <div className="container">
          <div className="row">
            <div className="brand clearfix">
              {images.map((value,index)=><SingleBrand key={index} importImg={importImg} brand={value}/>)}
            </div>
          </div>
        </div>
    )
  }
}
export default Brands;