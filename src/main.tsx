import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { store } from './app/store'
import ErrorPage from './error-page'
import Contact, { loader as contactLoader, action as contactAction, } from './routes/contracts/contact'
import EditContact, { action as editAction } from './routes/contracts/edit'
import ContractRoot, { action as rootAction, loader as rootLoader } from "./routes/contracts/root";
import { action as destroyAction } from "./routes/contracts/destroy";

import './index.css'
import Index from './routes/contracts'
import UserRoot from './features/users/root'
import UserIndex from './features/users'
import Root from './routes/root'
import UserView, { userLoader } from './features/users/view'
import EditUser from './features/users/edit'
import UserEdit from './features/users/edit'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/contacts",
        element: <ContractRoot />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
          {
            errorElement: <ErrorPage />,
            children: [
              { index: true, element: <Index /> },
              {
                path: ":contactId",
                element: <Contact />,
                loader: contactLoader,
                action: contactAction,
              },
              {
                path: ":contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
                action: editAction,
              },
              {
                path: ":contactId/destroy",
                action: destroyAction,
                errorElement: <div>Oops! There was an error.</div>,
              },
            ]
          },
        ]
      },
      {
        path: "/users",
        element: <UserRoot />,
        children: [
          { index: true, element: <UserIndex /> },
          {
            path: ":contactId",
            element: <UserView />,
            loader: userLoader
          },
          {
            path: "new",
            element: <UserEdit />,
          },
          {
            path: ":contactId/edit",
            element: <UserEdit />,
          }
        ]
      }
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
