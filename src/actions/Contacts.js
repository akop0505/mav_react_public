import api from '../Api';

function getContactsResponse(response) {
  return {
    type: 'FEEDBACK_RESPONSE',
    feedback: response,
  }
}

function getContactsError(error) {
  return {
    type: 'FEEDBACK_RESPONSE',
    error
  }
}

export function sendFeedback(params){
  return (dispatch,getState) => {
    const { currentLng } = getState().language;
    const response = api.Post('/contact/' + currentLng + '/feedback',params);
    response.then(function(success) {
      dispatch(getContactsResponse(success.data));
    }, function(error) {
      dispatch(getContactsError(error));
    });
  }
}