import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Etchings from './routes/Etchings.jsx'
import Paintings from './routes/Paintings'
import Digital from './routes/Digital'
import Comics from './routes/Comics'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  id: "root",
  children: [
    {
      index: true,
      // path:"/gergely_j_szabo",
      // path: "/gergely_j_szabo",
      element: <Home/>
    },
    {
      path:"/etchings",
      element: <Etchings/>
    },
    {
      path:"/paintings",
      element: <Paintings/>
    },
    {
      path:"/digital",
      element: <Digital/>
    },
    {
      path:"/comics",
      element: <Comics/>
    }
  ]
}])



ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}></RouterProvider>

)