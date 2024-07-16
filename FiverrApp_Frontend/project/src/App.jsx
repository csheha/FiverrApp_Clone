import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import Orders from './pages/orders/Orders'
import MyGigs from './pages/mygigs/MyGigs'
import Add from './pages/add/Add'
import Login from './pages/login/Login'

import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Home from './pages/home/Home';
import "./app.scss";

function App() {

  const Layout=()=>{
    return(
     <div className='app'>
      <Navbar/>
      <Outlet/>            {/* Renders the child route's element, if there is one.*/}
      <Footer/>
      </div>
    )
  }


  {/*This specifies that when the root URL (/) is accessed, 
                                            not only the Layout component is rendered, but also the Home component is 
                                          rendered inside the Outlet component within Layout. */}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[                      
        {                                     
          path:"/",
          element:<Home/>
        },
        {                                     
          path:"/gigs",
          element:<Gigs/>
        },
        {                                     
          path:"/gig/:id",
          element:<Gig/>
        },
        {                                     
          path:"/orders",
          element:<Orders/>
        },
        {                                     
          path:"/mygigs",
          element:<MyGigs/>
        },
        {                                     
          path:"/message/:id",
          element:<Message/>
        },
        {                                     
          path:"/messages",
          element:<Messages/>
        },
        {                                     
          path:"/add",
          element:<Add/>
        },
        {                                     
          path:"/login",
          element:<Login/>
        },
       
      ]
    },
  ]);

  return (
    <div>
        <RouterProvider router={router} />
     
    </div>
  )
}

export default App
