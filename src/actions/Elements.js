import api from '../Api';

function getElementsResponse(response) {
  return {
    type: 'HOME_RESPONSE',
    list: response,
  }
}

function getElementsError(error) {
  return {
    type: 'ELEMENTS_ERROR',
    error
  }
}

export function getElements(params = {}){
  const filter = {
    params:params
  };
  return (dispatch,getState) => {
    const { currentLng } = getState().language;
    const response = api.Get('/elements/elements',filter );

    response.then(function(success) {
      dispatch(getElementsResponse(success.data));
    }, function(error) {
      dispatch(getElementsError(error));
    });
  }
}