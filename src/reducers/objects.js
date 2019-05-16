const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'OBJECT_RESPONSE': {
      const {object} = action;
      return {...state, object};
    }
    case 'OBJECTS_RESPONSE': {
      const {list} = action;
      return {...state, list};
    }
    default:
      return state;
  }
};