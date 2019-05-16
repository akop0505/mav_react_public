import React, {Component} from 'react';

class TypesTitleComponent extends Component {
  render() {
    const {title} = this.props;
    return (
        <div className="container">
          <div className="row">
            <div className="facade-name col-lg-12">
              <h4>{ title }</h4>
              <hr className="hr_border"/>
            </div>
          </div>
        </div>
    );
  }
}
export default TypesTitleComponent;