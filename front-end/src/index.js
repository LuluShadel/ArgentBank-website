import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/config.css';

import Header from './components/Header';
import Footer from "./components/Footer";
import App from './main';
import Error from './routes/Error';
import SignIn from "./routes/SignIn"
import Profile from './routes/profile';

//redux
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./reducers"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const store = configureStore ({
  reducer : rootReducer, 
  devTools: true, // penser à passer en devtool false une fois le site finis pour que le store ne soit plus visible
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
    <Header />
    <Routes> 
          <Route path="/" element={<App />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path ="/Profile" element={<Profile />} />
          <Route path="*" element={<Error />} />

    </Routes>
    <Footer />
    </Router>
    </Provider>,
  
);
