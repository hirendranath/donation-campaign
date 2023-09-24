import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainRoot from './MainRoot/MainRoot';
import Home from './Home/Home';

const router=createBrowserRouter([
    {
      path:'/',
      element: <MainRoot></MainRoot>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
        },
        {
          path:'/donation',
          element: <div>Donation Page</div>,
        },
        {
          path:'/statistics',
          element: <div>Please Donate me now</div>,
        },
      ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
