import React , {Component} from 'react';
import {connect} from 'react-redux';

class AboutMavent extends Component {
  render(){
    const { elements ,language} = this.props;
    const {about} = elements.home !== undefined ? elements.home : {about:[]};
    return(
        <div className="container-fluid">
          <div className="row">
            <div className="systems clearfix">
              {about[language.currentLng] &&
                <div className="systems-information">
                  <h1>{about[language.currentLng].title}</h1>
                  <section dangerouslySetInnerHTML={{ __html: about[language.currentLng].description }}>
                  </section>
              </div>}

            </div>
          </div>
        </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    language: state.language,
    elements: state.elements
  }
};
export default connect(mapStateToProps)(AboutMavent);