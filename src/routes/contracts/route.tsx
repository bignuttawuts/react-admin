import { RouteObject } from 'react-router-dom';
import Index from '.';
import ErrorPage from '../../error-page';
import Contact, { contactAction, contactLoader } from './contact';
import EditContact, { contactEditAction } from './edit';
import ContractRoot, { rootAction, rootLoader } from './root';
import { destroyAction } from './destroy';

export const contactRoute: RouteObject = {
  path: "/contacts",
  element: <ContractRoot />,
  errorElement: <ErrorPage />,
  loader: rootLoader,
  action: rootAction,
  handle: { menuKey: "CONTACT" },
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
          action: contactEditAction,
        },
        {
          path: ":contactId/destroy",
          action: destroyAction,
          errorElement: <div>Oops! There was an error.</div>,
        },
      ]
    },
  ]
}