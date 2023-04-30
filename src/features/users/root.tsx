import { Link, Outlet } from 'react-router-dom';

export default function UserRoot() {
  return <>
    <>This is user app</>
    <Outlet />
  </>
}