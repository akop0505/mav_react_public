import React, {Component} from 'react';

class ObjectsDataComponent extends Component {
  render() {
    const {object, element} = this.props;
    return (
        <div className="container">
          <div className="row">
            <div className="our-slide-bottom-element clearfix">

              <div
                  className="our-slide-bottom-blog col-xs-6 col-sm-4 col-md-4  col-lg-4">
                <div className="our-slide-bottom-content">
                  <h4>{element.name}</h4>
                  <p>{ object.multilanguage.title}</p>
                </div>
              </div>

              <div
                  className="our-slide-bottom-blog col-xs-6 col-sm-4 col-md-4  col-lg-4">
                <div className="our-slide-bottom-content">
                  <h4>{element.address}</h4>
                  <p> {object.multilanguage.adress}</p>
                </div>
              </div>

              <div
                  className="our-slide-bottom-blog col-xs-12 col-sm-4 col-md-4  col-lg-4">
                <div className="our-slide-bottom-content our-slide-bottom-last">
                  <h4>{element.workload}</h4>
                  <p>{object.size + ", "+object.multilanguage.about}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
  }
}
export default ObjectsDataComponent;