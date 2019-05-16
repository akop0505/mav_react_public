import api from '../Api';

function getNewsResponse(response) {
  return {
    type: 'NEWS_RESPONSE',
    list: response,
  }
}
function getOneNewsResponse(response) {
  return {
    type: 'ONE_NEWS_RESPONSE',
    oneNews: response,
  }
}

function getNewsError(error) {
  return {
    type: 'NEWS_ERROR',
    error
  }
}

export function getNews(params = {}){
  return (dispatch,getState) => {
    const { currentLng } = getState().language;
    const response = api.Get('/news/' + currentLng + '/news', params);
    response.then(function(success) {
      dispatch(getNewsResponse(success.data));
    }, function(error) {
      dispatch(getNewsError(error));
    });
  }
}

export function getOneNews(id = null){
  if(id === null){
    return dispatch => { dispatch(getNewsResponse([]));}
  }
  return (dispatch, getState) => {
    dispatch(getOneNewsResponse([]));
    const params = {
      params : {
        id:id
      }
    };
    const { currentLng } = getState().language;
    const response = api.Get('/news/' + currentLng + '/one-news',params);
    response.then(function(success) {
      dispatch(getOneNewsResponse(success.data));
    }, function(error) {
      dispatch(getNewsError(error));
    });
  }
}