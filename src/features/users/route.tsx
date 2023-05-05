import { RouteObject } from 'react-router-dom';
import UserRoot from './root';
import UserIndex, { userIndexLoader } from '.';
import UserEdit, { userEditAction } from './edit';
import UserView, { userLoader } from './view';

export const userRoute: RouteObject = {
  path: "/users",
  element: <UserRoot />,
  handle: { menuKey: "USER" },
  children: [
    {
      index: true,
      element: <UserIndex />,
      loader: userIndexLoader
    },
    {
      path: ":contactId",
      element: <UserView />,
      loader: userLoader
    },
    {
      path: ":contactId/edit",
      element: <UserEdit />,
      action: userEditAction,
    }
  ]
}