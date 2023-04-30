import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { store } from './app/store'
import { userRoute } from './features/users/route'
import { contactRoute } from './routes/contracts/route'
import Root from './routes/root'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      contactRoute,
      userRoute
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
