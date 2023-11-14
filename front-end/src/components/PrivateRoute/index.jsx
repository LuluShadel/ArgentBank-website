import React from 'react';
import {  Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const localStorageToken = localStorage.getItem("token")
  const sessionStorageToken = sessionStorage.getItem("token")
  const token = sessionStorageToken || localStorageToken

  return token ? <Outlet /> : <Navigate to="/SignIn" /> // outlet sert ici à rendre les enfants d'une route parente. 
  
}

export default PrivateRoute;