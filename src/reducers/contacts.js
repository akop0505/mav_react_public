const DEFAULT_STATE = {};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'FEEDBACK': {
      const {contacts} = action;
      return {...contacts};
    }
    case 'FEEDBACK_RESPONSE': {
      const {feedback} = action;
      return {...state , feedback};
    }
    default:
      return state;
  }
};