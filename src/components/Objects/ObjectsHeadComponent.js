import React, {Component} from 'react';
import our_object_icon from "../../images/our-object-icon.png";
class ObjectsHeadComponent extends Component {
  render(){
    const { element } = this.props;
    return(
        <div className="container">
          <div className="row">
            <div className="object clearfix">
              <div className="our-object">
                <div className="our-object-text">
                  <img src={ our_object_icon }/>
                  <h2>{element.title}</h2>
                  <p>
                    {element.description}
                  </p>
                </div>
                <div className="our-information clearfix">

                  <div className="our-information-blog col-xs-12 col-sm-4 col-md-4  col-lg-4">
                    <div className="our-information-content">
                      <h3>{element.subtitle_1}</h3>
                      <hr/>
                      <p>{element.sub_content_1}</p>
                    </div>
                  </div>

                  <div className="our-information-blog col-xs-12 col-sm-4 col-md-4  col-lg-4">
                    <div className="our-information-content">
                      <h3>{element.subtitle_2}</h3>
                      <hr/>
                      <p>{element.sub_content_2}</p>
                    </div>
                  </div>

                  <div className="our-information-blog col-xs-12 col-sm-4 col-md-4  col-lg-4">
                    <div className="our-information-content">
                      <h3>{element.subtitle_3}</h3>
                      <hr/>
                      <p>{element.sub_content_3}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default ObjectsHeadComponent;
