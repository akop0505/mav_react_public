import api from '../Api';

function getSlidesResponse(response) {
  return {
    type: 'SLIDES_RESPONSE',
    list: response,
  }
}

function getSlidesError(error) {
  return {
    type: 'SLIDES_ERROR',
    error
  }
}

export function getSlides(){
  return (dispatch,getState) => {
    const { currentLng } = getState().language;
    const response = api.Get('/slide/' + currentLng + '/slides');
    response.then(function(success) {
      dispatch(getSlidesResponse(success.data));
    }, function(error) {
      dispatch(getSlidesError(error));
    });
  }
}