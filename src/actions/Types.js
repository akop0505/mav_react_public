import api from '../Api';

function getTypeResponse(response) {
  return {
    type: 'TYPE_PRODUCTS_RESPONSE',
    list: response,
  }
}

function getTypeError(error) {
  return {
    type: 'TYPE_PRODUCTS_ERROR',
    error
  }
}

export function getTypes(){
return (dispatch,getState) => {
  const params = {
    params : {
      limit : 5
    }
  };
  const { currentLng } = getState().language;
  const response = api.Get('/product/' + currentLng + '/type-products',params);
  response.then(function(success) {
    dispatch(getTypeResponse(success.data));
  }, function(error) {
    dispatch(getTypeError(error));
  });
}
}