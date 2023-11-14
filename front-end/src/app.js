import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Footer from './components/Footer';
import Header from "./components/Header"
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/signUp';
import Profile from './routes/profile';
import Error from './routes/Error';


export default function App () {

  return (
    <BrowserRouter>
    <Header />
    <Routes> 
          <Route path="/" element={<Home />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path ="/Profile" element={<Profile />} />
          <Route path="*" element={<Error />} />

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}