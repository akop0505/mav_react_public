import React, {Component} from 'react';
import {connect} from 'react-redux';

class ContactText extends Component {
  render() {
    const {language, elements} = this.props;
    const {contacts} = elements.home ? elements.home : {contacts:[]};
    return (<div className="container-fluid">
      <div className="contact-data-parent clearfix">
        {contacts[language.currentLng] &&
          <div className="contact-data clearfix">
            <h1> {contacts[language.currentLng].title}</h1>

            <div
                className="contact-data-text col-xs-6 col-sm-4 col-md-4  col-lg-4">
              <div className="contact-data-text-content">
                <h4>{contacts[language.currentLng].phone_fax}</h4>
                <p>
                  {contacts.phone}
                </p>
                <p>
                  {contacts.fax}
                  </p>
              </div>
            </div>

            <div
                className="contact-data-text col-xs-6 col-sm-4 col-md-4  col-lg-4">
              <div className="contact-data-text-content">
                <h4>{contacts[language.currentLng].address_title}</h4>
                <p>{contacts[language.currentLng].address}
                  </p>
              </div>
            </div>

            <div
                className="contact-data-text contact-data-text2 col-xs-12 col-sm-4 col-md-4  col-lg-4">
              <div className="contact-data-text-content our-slide-bottom-last">
                <h4>{contacts[language.currentLng].email}</h4>
                <p>{contacts.email}</p>
              </div>
            </div>
          </div>}
      </div>

    </div>);
  }
}
const mapStateToProps = (state) => {
  return {
    language: state.language,
    elements: state.elements,
  };
};

export default connect(mapStateToProps)(ContactText);