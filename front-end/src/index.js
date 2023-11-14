import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/config.css';

import App from './app';



//redux
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./reducers"




const store = configureStore ({
  reducer : rootReducer, 
  devTools: true, // penser à passer en devtool false une fois le site finis pour que le store ne soit plus visible
})






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider>,
  
);
