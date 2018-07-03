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
import Header from './routes/Header';

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
          <Route path="*" component={App} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
