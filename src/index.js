import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';

// Create redux store -> reducers -> 'actions - actionType' | applyMiddleware();
const store = createStore( 
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk)) 
);

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" 
          data-toggle="collapse"
          data-target="#myNavbar">
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>

        <Link className="navbar-brand" to="/">
          VOTING
        </Link>
        
      </div>
    </div>
  </nav>
);

// Provide the store to react

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/login" component={Login} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
