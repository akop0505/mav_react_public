const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'PRODUCT_RESPONSE': {
      const {product} = action;
      return {...state, product};
    }
    case 'PRODUCTS_RESPONSE': {
      const {list} = action;
      return {...state, list};
    }
    default:
      return state;
  }
};