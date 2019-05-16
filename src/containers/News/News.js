import React, {Component} from 'react';
import product_hover_eye_full from  '../../images/product-hover-eye-full.png';
import {connect} from 'react-redux';
import {getNews} from '../../actions/News';
import NewsComponent from '../../components/News/NewsComponent';

import cross from  '../../images/cross.png';
import post1 from  '../../images/post1.jpg';
import post2 from  '../../images/post2.jpg';
import post3 from  '../../images/post3.jpg';
import post4 from  '../../images/post4.jpg';

class News extends Component {
  componentDidMount() {
    const params = {
      params: {
        limit: 5,
      }
    };
    this.props.getNews(params);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.language.currentLng !== this.props.language.currentLng ){
      const params = {
        params: {
          limit: 5,
        }
      };
      this.props.getNews(params);
    }
  }

  render() {
    const {news,language,elements} = this.props;
    const news_element = elements.home ? elements.home.news : [];
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="news clearfix">
              <h1>{news_element[language.currentLng] && news_element[language.currentLng].title}</h1>
              <NewsComponent news={news.list || []} more={true} element = {news_element[language.currentLng] || {}}/>
            </div>
          </div>
        </div>
    );
  }
}
const mapToProps = (state, props) => {
  return {
    language: state.language,
    elements: state.elements,
    news: state.news,
  };
};

export default connect(mapToProps, {getNews})(News);