import api from '../Api';

function getObjectResponse(response) {
  return {
    type: 'OBJECT_RESPONSE',
    object: response,
  }
}

function getObjectsResponse(response) {
  return {
    type: 'OBJECTS_RESPONSE',
    list: response,
  }
}

function getObjectError(error) {
  return {
    type: 'OBJECT_ERROR',
    error
  }
}

export function getObject(id = null){
  const params = {
    params:{}
  };
  if(id!==null){
    params.params.id = id;
  }
  return (dispatch,getState) => {
    dispatch(getObjectResponse([]));
    const { currentLng } = getState().language;
    const response = api.Get('/object/' + currentLng + '/object',params);
    response.then(function(success) {
      dispatch(getObjectResponse(success.data));
    }, function(error) {
      dispatch(getObjectError(error));
    });
  }
}

export function getMoreObjects(params = {}){
  return (dispatch,getState) => {
    dispatch(getObjectsResponse([]));
    const { currentLng } = getState().language;
    const response = api.Get('/object/' + currentLng + '/objects',params);
    response.then(function(success) {
      dispatch(getObjectsResponse(success.data));
    }, function(error) {
      dispatch(getObjectError(error));
    });
  }
}