import React from 'react';
import ReactDOM from 'react-dom';
import AllRoutes from './routes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import ReduxStore from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <AllRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

