import React , { Component } from 'react';

class Footer extends Component{
  render (){
    return(<div className="container-fluid">
      <div className="row">
        <div className="footer clearfix">
          <div className="footer-text clearfix">
            <h2 className="footer_logo">
              <span className="logo_mav">MAV</span><span className="logo_ent">ENT</span>
            </h2>
            <p>Торговая марка «MAVENT»
              © 2013-2017 Все права защищены законом.</p>
            <center>
              <ul className="footer-social">
                <li><a href="#"><img src="images/vk.png"/></a></li>
                <li><a href="#"><img src="images/fb.png"/></a></li>
              </ul>
            </center>
          </div>
        </div>
      </div>
    </div>);
  }
}
export default Footer;