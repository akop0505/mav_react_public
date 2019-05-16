import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import scrollToComponent from 'react-scroll-to-component';
import {connect} from 'react-redux';
/*Containers*/
import HeaderSlider from './containers/HeaderSlider/HeaderSlider';
import OurProduct from './containers/Product/OurProduct';
import AboutMavent from './containers/AboutMavent/AboutMavent';
import OurObjects from './containers/OurObjects/OurObjects';
import ContactForm from './containers/Contact/ContactForm';
import ContactText from  './containers/Contact/ContactText';
import Brands from './containers/Brands/Brands';
import News from './containers/News/News';
/*Components*/
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
import {getElements} from "./actions/Elements";
import GoogleMap from './components/GoogleMap/GoogleMap';
class App extends Component {
  componentWillMount(){
    this.props.getElements({sub_alias:"home"});
  }

  componentDidMount(){
    window.scrollTo( 0, 0);
    setTimeout(()=>{
      const { params } = this.props.match;
      if(params.moveTo){
        scrollToComponent(this.refs[params.moveTo]);
      }
    },2000);
  }
  componentDidUpdate(){
    const { params } = this.props.match;
    if(params.moveTo){
      scrollToComponent(this.refs[params.moveTo],{
        align: 'top',
        duration: 1000});
    }
  }
  render() {
    const { elements } = this.props;
    return (
      <div>
        <HeaderSlider/>
        <OurProduct/>
        <AboutMavent/>
        <OurObjects/>
        <ContactForm ref="back_contact"/>
        <ContactText ref="contact" />
        <GoogleMap/>
        <Brands/>
        <News ref="news"/>
        {/*<div classNameName="App-header">
          <img src={logo} classNameName="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p classNameName="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    elements:state.elements
  }
};

export default connect(mapStateToProps,{getElements})(withCookies(App));
