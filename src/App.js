
import React, { useEffect } from 'react';
import {RouterProvider, createBrowserRouter, } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Body from './components/Body';
import AboutUs from './components/AboutUs';
import ToDo from './components/ToDo';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import store from './utils/store';
import {Provider, useDispatch} from 'react-redux';
import {login} from '../src/utils/authSlice';


 const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
     const id = sessionStorage.getItem('id');
     if(id){
     dispatch(login());
     }
  } , [])

  const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <Body/>,
      children : [
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/aboutUs',
          element : <AboutUs/>
        },
        {
          path : '/toDo',
          element : <ToDo/>
        },
        {
          path : '/signIn',
          element : <SignIn/>
        },
        {
          path : '/signUp',
          element : <SignUp/>
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={appRouter}  />  
    </>
  )
}

export default App;
