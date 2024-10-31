import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoutes from './leouut/ProtectedRoutes'
import Home from './pages/Home'
import RootLeouts from './leouut/RootLeouts'

const App = () => {
  const admin = true
  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoutes admin={admin} >
          <RootLeouts />
        </ProtectedRoutes >
      ),
      children: [
        {
          index: true,
          element: <Home />
        }
      ],
    },

    {
      path: '/login',
      element: <Login></Login>
    }
  ])
  return (
    <RouterProvider router={routes}>

    </RouterProvider>
  )
}

export default App
