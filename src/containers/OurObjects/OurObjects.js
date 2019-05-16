import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getObject} from '../../actions/Objects';
import ObjectsHeadComponent from '../../components/Objects/ObjectsHeadComponent';
import ObjectsSliderComponent from '../../components/Objects/ObjectsSliderComponent';
import ObjectsDataComponent from '../../components/Objects/ObjectsDataComponent';

class OurObjects extends Component {
  componentDidMount() {
    this.props.getObject();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.language.currentLng !== this.props.language.currentLng ){
      this.props.getObject();
    }
  }

  render() {
    const {object, language, elements} = this.props;
    const {images} = object;
    const element_object = elements.home !== undefined ? elements.home.object : [];
    return (
        <section>
          <ObjectsHeadComponent element={element_object[language.currentLng] && element_object[language.currentLng] || []} />
          <ObjectsSliderComponent images={images || []}/>
          {object.multilanguage && <ObjectsDataComponent object={object} element={element_object[language.currentLng] && element_object[language.currentLng] || []} />}
        </section>
    );
  }
}

const mapStateToProps = (state, props) => {
  const {object} = state.objects;
  return {
    language: state.language,
    elements: state.elements,
    object: object || [],
  };
};

export default connect(mapStateToProps, {getObject})(OurObjects);