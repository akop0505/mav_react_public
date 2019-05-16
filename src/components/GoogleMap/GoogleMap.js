import React , {Component} from 'react';

class GoogleMap extends Component {
  render (){
    return(
        <div className="container-fluid">
          <div className="row">
            <div className="map clearfix">
              <div className="map_iframe col-md-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.216225729443!2d-89.2391164!3d48.45238070000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d5921616d61c26b%3A0x15e5407d2071c8dd!2s109+Hogarth+St%2C+Thunder+Bay%2C+ON+P7A+7G8!5e0!3m2!1sen!2sca!4v1424371524427" width="100%" height="450" frameBorder="0"  style={{border:'0'}}></iframe>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default GoogleMap;