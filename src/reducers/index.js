import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import types from './types';
import slides from './slides';
import objects from './objects';
import news from './news';
import products from './products';
import contacts from './contacts';
import language from './language';
import elements from './elements';


export default combineReducers({
  routing: routerReducer,
  types,
  slides,
  objects,
  news,
  products,
  contacts,
  language,
  elements
})