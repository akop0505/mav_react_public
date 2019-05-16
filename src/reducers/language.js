const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'CURRENT_LNG': {
      const { currentLng  } = action;
      return { currentLng  };
    }
    default:
      return state;
  }
};