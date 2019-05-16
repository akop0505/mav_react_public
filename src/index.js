import React from 'react';
import ReactDOM from 'react-dom';
import  {Provider} from 'react-redux';
import  {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import  thunk from  'redux-thunk';
import {Router, Route, Switch , Redirect} from 'react-router';
import {createHashHistory} from 'history';
import Home from './containers/Home/Home';
import NavBar from './containers/NavBar/NavBar';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/js/bootstrap.min';

import './css/style.css';
// import './css/font-awesome.min.css';

import reducer from './reducers';
import './index.css';
import App from './App';
import MoreProducts from './MoreProducts';
import MoreObjects from './MoreObjects';
import MoreNews from './MoreNews';
import registerServiceWorker from './registerServiceWorker';
import NavContainer from './containers/NavContainer/NavContainer';
import Footer from './containers/Footer/Footer';
import SingleProduct from './containers/Product/SingleProduct';
import SingleObject from './containers/OurObjects/SingleObject';
import SingleNews from './containers/News/SingleNews';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';


const history = createHashHistory();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// import { HashRouter } from 'react-router-dom'
// import { Route, IndexRoute } from 'react-router'
//const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <div className="wrapper">
      <Provider store={store}>
        <CookiesProvider>
        <Router onUpdate={() => window.scrollTo(0,0)} history={history}
                component={App}>
          <section>
            <div className="header">
              <header className="header-fixed">
                <NavContainer/>
              </header>
            </div>
            <Switch>
              <Route exact={true} strict={true} path="/home/:moveTo?" component={App}/>
              <Route path="/products" component={MoreProducts}/>
              <Route path="/product/:id" component={SingleProduct}/>
              <Route path="/objects" component={MoreObjects}/>
              <Route path="/object/:id" component={SingleObject}/>
              <Route exact={true} path="/news" component={ MoreNews }/>
              <Route path="/news/:id" component={SingleNews}/>
              <Redirect from="/" to="/home" />
            </Switch>
            {/*<Route path="/user/home/abc" component={NavBar}/>*/}
          </section>
        </Router>
        </CookiesProvider>
      </Provider>
      <Footer/>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
