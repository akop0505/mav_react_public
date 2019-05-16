import React, {Component} from 'react';
import {connect} from 'react-redux';
import ObjectsComponent from './components/Objects/ObjectsComponent';
import {getMoreObjects} from './actions/Objects';
import ReactLoading from 'react-loading';
import {getElements} from './actions/Elements';

const style = require('classnames/bind').bind(
    require('./ContainerStyles.css')
);

class MoreObjects extends Component {
  componentWillMount(){
    this.props.getElements({alias:'object',sub_alias:'object_page'});
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getMoreObjects();
  };
  componentWillReceiveProps(nextProps){
    if(nextProps.language.currentLng !== this.props.language.currentLng ){
      this.props.getMoreObjects();
    }
  }
  render() {
    const {objects,language,elements} = this.props;
    const object_element = elements.object_page !== undefined ? elements.object_page.object : {};
    return (
        <div className="container-fluid">
          <div className="row">
            {object_element[language.currentLng] &&
            <div className="object-all clearfix">
              <h1>{object_element[language.currentLng].title}</h1>
              <p className="object-all-title-desc">
                {object_element[language.currentLng].description}
              </p>
              {objects.list && objects.list.length ? <ObjectsComponent objects={ objects.list }/> :
                  <ReactLoading type="spin" color="#ea212d" height="150px" width="150px" className={style('container_loading')}/>
              }
            </div>
            }
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    objects: state.objects,
    language: state.language,
    elements: state.elements
  };
};

export default connect(mapStateToProps, {getMoreObjects,getElements})(MoreObjects);