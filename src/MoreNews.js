import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNews} from './actions/News';
import NewsComponent from './components/News/NewsComponent';
import ReactLoading from 'react-loading';
import {getElements} from './actions/Elements';

const style = require('classnames/bind').bind(
    require('./ContainerStyles.css')
);
class MoreNews extends Component {
  componentWillMount(){
    this.props.getElements({alias:'news',sub_alias:'news_page'});
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getNews();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.language.currentLng !== this.props.language.currentLng ){
      this.props.getNews();
    }
  }
  render() {
    const {news, language, elements} = this.props;
    const news_element = elements.news_page !== undefined ? elements.news_page.news : {};
    console.log(news_element[language.currentLng]);
    return (
        <div className="container-fluid">
          {news.list &&  <div className="row">
            <div className="news-all clearfix">
              <h1>{news_element[language.currentLng] ? news_element[language.currentLng].title : ""}</h1>

              <p className="news-all-title-desc">
                {news_element[language.currentLng] ? news_element[language.currentLng].description : ""}
              </p>
              <NewsComponent news={news.list} more={false}/>
            </div>
          </div>
          ||
          <ReactLoading type="spin" color="#ea212d" height="150px"
                        width="150px" className={style('container_loading')}/>}
        </div>

    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    news: state.news,
    elements : state.elements,
    language : state.language
  };
};

export default connect(mapStateToProps, {getNews, getElements})(MoreNews);