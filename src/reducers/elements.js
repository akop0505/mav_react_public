const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'HOME_RESPONSE': {
      const { list  } = action;
      return { ...state, ...list };
    }
    default:
      return state;
  }
};