import React, {Component} from 'react';

class TypesDescriptionComponent extends Component {
  render() {
    const {element} = this.props;
    return (
        <div className="container">
          <div className="row">
            <div className="our-text">
              <p>{element.description}</p>
            </div>
          </div>
        </div>
    );
  }
}
export default TypesDescriptionComponent;