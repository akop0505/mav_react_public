import React, {Component} from 'react';
import {connect} from 'react-redux';

import SocialSitesComponent from '../../components/Tools/SocialSitesComponent';
import ObjectsSlider from '../../components/Objects/ObjectsSliderComponent';
import ObjectsDataComponent from '../../components/Objects/ObjectsDataComponent';
import ObjectsComponent from '../../components/Objects/ObjectsComponent';
import {getObject, getMoreObjects} from '../../actions/Objects';
import {getElements} from '../../actions/Elements';
import ReactLoading from 'react-loading';
const style = require('classnames/bind').bind(
    require('../../ContainerStyles.css')
);

function LoadData(self) {
  window.scrollTo(0, 0);
  const {id} = self.props.match.params;
  const params = {
    params: {
      limit: 3,
      random: 1,
    },
  };
  self.props.getObject(id);
  self.props.getMoreObjects(params);
}
class SingleObject extends Component {
  componentWillMount(){
    this.props.getElements({alias:'object',sub_alias:'single_object_page'});
  }
  componentDidMount() {
    LoadData(this);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.language.currentLng !== this.props.language.currentLng ){
      LoadData(this);
    }
  }
  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params;
    const currentId = this.props.match.params;
    if (prevId !== currentId) {
      LoadData(this);
    }
  }

  render() {
    const {object, objects,language,elements} = this.props;
    const {images} = object;
    const object_element = elements.single_object_page !== undefined ? elements.single_object_page.object : {};
    return (
        <div className="object-page">

          <div className="container">
            <div className="row">
              <div className="object-page-social clearfix">
                <SocialSitesComponent/>
              </div>
            </div>
          </div>
          <div className="container slider-container">
            <ObjectsSlider images={ images || [] }/>
          </div>
          {Object.keys(object).length > 0 ?
          <ObjectsDataComponent object={object} element={object_element[language.currentLng] || {}}/> :
              <div className={"container-fluid"}>
                <ReactLoading type="spin" color="#ea212d" height="150px" width="150px" className={style('container_loading')}/>
              </div>
          }
          <div className="container-fluid">
            <div className="row">
              <div className="news clearfix">
                <h1>{object_element[language.currentLng] && object_element[language.currentLng].other}</h1>
                {Object.keys(objects).length > 0 &&
                <ObjectsComponent objects={objects}/> || <div className={"container-fluid"}>
                  <ReactLoading type="cylon" color="#ea212d" height="150px" width="150px" className={style('container_loading')}/>
                </div>}
              </div>
            </div>
          </div>
        </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  const {list} = state.objects;
  const {object}= state.objects;
  return {
    object: object || {},
    objects: list || [],
    language: state.language,
    elements:state.elements
  };
};
export default connect(mapStateToProps, {getObject, getMoreObjects,getElements})(
    SingleObject);