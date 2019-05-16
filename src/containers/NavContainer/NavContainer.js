import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {withCookies, Cookies} from 'react-cookie';
import language_ru from '../../images/language_ru.png';
import language_en from '../../images/language_en.png';
import images_vk from '../../images/vk.png';
import images_fb from '../../images/fb.png';
import {instanceOf} from 'prop-types';
import {getElements} from '../../actions/Elements';

class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.setLng = this.setLng.bind(this);
  }
  componentWillMount() {
    const {cookies} = this.props;
    const lng = cookies.get('LNG') || 'ru';
    cookies.set('LNG', lng);
    this.props.currentLanguage(lng);
    this.props.getElements({
      alias : 'navbar',
      sub_alias : 'navbar_menu'
    });
  }
  setLng(lng) {
    const {cookies} = this.props;

    cookies.set('LNG',lng);
    this.props.currentLanguage(lng);
    //this.forceUpdate();
    //window.location.reload();
  }

  render() {
    const {language , elements} = this.props;
    const {navbar} = elements.navbar_menu !== undefined ? elements.navbar_menu : {navbar:[]};

    return (
        <nav>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle"
                      data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <h2 className="logo clearfix">
                <Link className="navbar-brand" to={'/'} replace>
                  <span className="logo_mav">MAV</span><span
                    className="logo_ent">ENT</span></Link>
              </h2>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <div className="header-menu-parent clearfix">
                {navbar[language.currentLng] &&
                <ul className="header-menu navbar-nav clearfix">
                  <li className="our-product-menu"><NavLink to={'/products'}>
                    { navbar[language.currentLng].product }
                    </NavLink></li>
                  <li className="our-object-menu"><Link
                      to={'/objects'}>
                    { navbar[language.currentLng].object }
                    </Link></li>
                  <li className="our-contact-menu"><Link
                      to={'/home/back_contact'}>
                    { navbar[language.currentLng].feedback }
                    </Link>
                  </li>
                  <li className="our-contact-information-menu"><NavLink
                      to={'/home/contact'}>
                    { navbar[language.currentLng].contact }
                    </NavLink>
                  </li>
                  <li className="our-news-menu"><Link
                      to={'/home/news'}>
                    { navbar[language.currentLng].news }
                  </Link></li>
                </ul>
                }
              </div>
              <div className="header-menu-right-blog clearfix">
                <ul className=" navbar-nav navbar-left">
                  <li><a href="#"><img src={images_vk}/></a></li>
                  <li><a href="#"><img src={images_fb}/></a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <div className="language-div clearfix">
                    <li><a href="javascript:void(0)" onClick={() => this.setLng('ru')}><img
                        src={language_ru}/></a></li>
                    <li><a href="javascript:void(0)" onClick={() => this.setLng('en')}><img
                        src={language_en}/></a></li>
                  </div>
                  {language.currentLng && language.currentLng == 'ru' ?
                      <li className="language">
                        <a href="javascript:void(0)"><img src={ language_ru }/></a>
                      </li> :
                      <li className="language">
                        <a href="javascript:void(0)"><img src={ language_en }/></a>
                      </li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </nav>
    );
  }
}
const stateToProps = (state)=>{
  return{
    language : state.language,
    elements : state.elements
  }
};
const languageDispatch = dispatch => ({
  currentLanguage: (value) => {
    dispatch({type: 'CURRENT_LNG', currentLng : value});
  },
  getElements: (data)=>dispatch(getElements(data))
});
export default connect(stateToProps,languageDispatch)(withCookies(NavContainer));