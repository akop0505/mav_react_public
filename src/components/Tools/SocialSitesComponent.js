import React , {Component} from 'react';

class SocialSitesComponent extends Component
{
  render(){
    return(
          <ul className="social-network social-circle">
            <li><a target="_blank" href="#"
                   className="icoFacebook"
                   title="Facebook"><i
                className="fa fa-facebook"/></a>
            </li>
            <li><a target="_blank" href="#"
                   className="icoTwitter"
                   title="Twitter"><i
                className="fa fa-twitter"/></a></li>
            <li><a target="_blank" href="#"
                   className="icoLinkedin"
                   title="Linkedin"><i
                className="fa fa-linkedin"/></a>
            </li>
            <li><a target="_blank" href="#" className="icoGoogle"
                   title="Google +"><i
                className="fa fa-google-plus"/></a></li>
            <li><a target="_blank" href="#" className="icoRss"
                   title="Rss"><i
                className="fa fa-pinterest"/></a>
            </li>
          </ul>
    );
  }
}
export default SocialSitesComponent;