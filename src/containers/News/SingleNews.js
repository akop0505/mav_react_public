import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewsComponent from '../../components/News/NewsComponent';
import news_page from '../../images/product-image.jpg';
import {getOneNews, getNews} from '../../actions/News';
import ReactLoading from 'react-loading';
import {getElements} from '../../actions/Elements';

const style = require('classnames/bind').bind(
    require('../../ContainerStyles.css'));

function loadData(self){
  const {id} = self.props.match.params;
  const params = {
    params: {
      limit: 3,
      random: 1,
    },
  };
  self.props.getOneNews(id);
  self.props.getNews(params);

}

class SingleNews extends Component {
  componentWillMount(){
    this.props.getElements({alias:'news',sub_alias:'single_news_page'});
  }
  componentDidMount() {
    loadData(this);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.language.currentLng !== this.props.language.currentLng ){
      loadData(this);
    }
  }
  componentDidUpdate(prevProps, prevState){
    window.scrollTo(0, 0);
    const prevId = prevProps.match.params.id;
    const currentId = this.props.match.params.id;
    if(prevId !== currentId){
      loadData(this);
    }
  }

  render() {
    const {oneNews, news,language,elements} = this.props;
    const news_element = elements.single_news_page !== undefined ? elements.single_news_page.news : {};
    return (
        <div className="news-page">
          {Object.keys(oneNews).length > 0 &&
          <div className="container-fluid">
            <div className="row">
              <div className="news-page-img">
                <img src={oneNews.full_img_path}/>
              </div>
            </div>
          </div>
              ||
          <div className="container-fluid">
            <ReactLoading type="spin" color="#ea212d" height="150px"
                          width="150px" className={style('container_loading')}/>
          </div>
          }
          {Object.keys(oneNews).length > 0 &&
          <div className="container">
            <div className="row">
              {Object.keys(oneNews).length > 0 &&
              <div className="page-content clearfix">
                <div className="page-content-name">
                  <h1>{oneNews.multilanguage.title}</h1>
                </div>

                <div className="news-page-text" dangerouslySetInnerHTML={{__html: oneNews.multilanguage.content}}>

                </div>
              </div> }
            </div>
          </div>
          }

          <div className="container-fluid">
            { Object.keys(news).length > 0 ?
            <div className="row">
              <div className="news clearfix">
                <h1>{news_element[language.currentLng] &&  news_element[language.currentLng].other}</h1>
                  <NewsComponent news = {news} more={false}/>
              </div>
            </div>
            :
                <ReactLoading type="cylon" color="#ea212d" height="150px"
                                width="150px" className={style('container_loading')}/>}
          </div>
        </div>
    );
  }
}

const matStateToProps = (state) => {
  const {list} = state.news;
  const {oneNews} = state.news;
  return {
    news: list || [],
    oneNews: oneNews || {},
    language: state.language,
    elements: state.elements
  };
};

export default connect(matStateToProps, {getOneNews, getNews,getElements})(SingleNews);