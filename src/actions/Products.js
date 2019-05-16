import api from '../Api';

function getProductResponse(response) {
  return {
    type: 'PRODUCT_RESPONSE',
    product: response,
  };
}

function getProductsResponse(response) {
  return {
    type: 'PRODUCTS_RESPONSE',
    list: response,
  };
}

function getProductError(error) {
  return {
    type: 'PRODUCT_ERROR',
    error,
  };
}

export function getProduct(id) {
  return (dispatch,getState) => {
    dispatch(getProductResponse({}));
    const { currentLng } = getState().language;
    const response = api.Get('/product/'+ currentLng +'/product', {
      params: {
        id: id,
      },
    });
    response.then(function(success) {
      dispatch(getProductResponse(success.data));
    }, function(error) {
      dispatch(getProductError(error));
    });
  };
}

export function getProducts() {
  return (dispatch,getState) => {
    dispatch(getProductsResponse([]));
    const { currentLng } = getState().language;
    const response = api.Get('/product/'+ currentLng +'/products', {
      params: {
        limit: 3,
        random: 1
      },
    });
    response.then(function(success) {
      dispatch(getProductsResponse(success.data));
    }, function(error) {
      dispatch(getProductError(error));
    });
  };
}