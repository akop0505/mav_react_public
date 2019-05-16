import React, {Component} from 'react';
import {connect} from 'react-redux';
import message_icon from '../../images/message-icon.png';
import form_phone from '../../images/form-phone.png';
import form_man_icon from '../../images/form-man-icon.png';
import {sendFeedback} from '../../actions/Contacts';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleComments = this.handleComments.bind(this);
    this.send = this.send.bind(this);
  }

  handleEmail(e) {
    const {contacts} = this.props;
    contacts.email = e.target.value;
    this.props.setFeedback(contacts);
  }

  handlePhone(e) {
    const {contacts} = this.props;
    contacts.number = e.target.value;
    this.props.setFeedback(contacts);
  }

  handleName(e) {
    const {contacts} = this.props;
    contacts.name = e.target.value;
    this.props.setFeedback(contacts);
  }

  handleComments(e) {
    const {contacts} = this.props;
    contacts.subject = e.target.value;
    // this.props.setFeedback(contacts);
  }

  send(e) {
    e.preventDefault();
    const {contacts} = this.props;
    this.props.sendFeedback(contacts);
  }

  render() {
    const {contacts , feedback, language, elements} = this.props;
    const feedback_element = elements.home !== undefined ? elements.home.feedback : [];
    return (
        <div className="container-fluid contact-padding">
          {feedback_element[language.currentLng] &&
            <div className="contact clearfix">
            <div className="contact-information">
              <h1>{feedback_element[language.currentLng].title}</h1>

              <p>{feedback_element[language.currentLng].description}</p>

              <form className="form-horizontal" action="" method="post"
                    id="contact_form">
                <fieldset>
                  <div className="form-group">
                    <div className="col-md-12 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><img
                            src={message_icon}/></span>
                        <input name="email" placeholder={feedback_element[language.currentLng].placeholder_mail}
                               className="form-control" type="text"
                               onChange={(e) => this.handleEmail(e)}/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon phone-images"><img
                            src={form_phone}/></span>
                        <input name="phone"
                               placeholder={feedback_element[language.currentLng].placeholder_phone}
                               className="form-control"
                               type="text"
                               onChange={(e) => this.handlePhone(e)}/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon name-images"><img
                            src={form_man_icon}/></span>
                        <input name="last_name" placeholder={feedback_element[language.currentLng].placeholder_name}
                               className="form-control" type="text"
                               onChange={(e) => this.handleName(e)}/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12 inputGroupContainer">
                      <div className="input-group input-group-textarea">
                        <textarea className="form-control" name="comment"
                                  placeholder={feedback_element[language.currentLng].placeholder_comment}
                                  onChange={(e) => this.handleComments(e)}/>
                      </div>
                    </div>
                  </div>
                  { Object.keys(feedback).length > 0 &&
                    <div className="alert alert-success" role="alert">Success <i
                        className="glyphicon glyphicon-thumbs-up"/> Thanks for
                      contacting us, we will get back to you shortly.
                    </div>
                  }
                  <div className="form-group">

                    <div className="col-md-12">
                      <button type="submit" className="btn my-custom-submit"
                              onClick={ (e) => this.send(e) }>
                        {feedback_element[language.currentLng].button_value}
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>}
        </div>);
  }
}
const mapStateToProps = (state) => {
  const {feedback} = state.contacts;
  return {
    language: state.language,
    elements: state.elements,
    contacts: state.contacts,
    feedback: feedback || {}
  };
};
const addFormData = dispatch => ({
  setFeedback: (contacts) => {
    dispatch({type: 'FEEDBACK', contacts});
  },
  sendFeedback: (data)=>dispatch(sendFeedback(data))
});
/*function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign(stateProps, ownProps, dispatchProps, {
    sendFeedback: sendFeedback,
  });
}*/
export default connect(mapStateToProps, addFormData)(ContactForm);


