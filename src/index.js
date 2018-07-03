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

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Header from './routes/Header';
// import LoadingComponent from './components/LoadingComponent';

// Create redux store -> reducers -> 'actions - actionType' | applyMiddleware();
const store = createStore( 
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk)) 
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
          <Redirect from="/logout" to="/" />
        </Switch>
      </div>
      {/* <LoadingComponent>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Redirect from="/logout" to="/" />
          </Switch>
        </div>
      </LoadingComponent> */}
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
