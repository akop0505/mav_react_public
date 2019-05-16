const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'NEWS_RESPONSE': {
      const {list} = action;
      return {...state, list};
    }
    case 'ONE_NEWS_RESPONSE' : {
      const {oneNews} = action;
      return {...state, oneNews};
    }
    default:
      return state;
  }
};