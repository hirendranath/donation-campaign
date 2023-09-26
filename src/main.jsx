import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainRoot from './Components/MainRoot/MainRoot';
import Home from './Components/Home/Home';
import DonationDetails from './Components/DonationDetails/DonationDetails';

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
          path:'/donation/:id',
          element: <DonationDetails></DonationDetails>,
          loader:()=>fetch('../data.json')
        },
        {
          path:'/statistics',
          element: <div>Please Donate me</div>,
        },
      ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
