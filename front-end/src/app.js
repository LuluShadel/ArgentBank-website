import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Footer from './components/Footer';
import Header from "./components/Header"
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/signUp';
import Profile from './routes/profile';
import Error from './routes/Error';
import PrivateRoute from './components/PrivateRoute';


export default function App () {

 

  return (
    <BrowserRouter>
    <Header />
    <Routes> 
          <Route path="/" element={<Home />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path="*" element={<Error />} />

          <Route element={<PrivateRoute />}>
            <Route path='/Profile' element={<Profile />}/>
          </Route>
          

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}