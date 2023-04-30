import { Link, Outlet } from 'react-router-dom';

export default function UserRoot() {
  return <>
    <Link to="/users/1">User 1</Link><br />
    <Link to="/users/2">User 2</Link><br />
    <Link to="/users/3">User 4</Link><br />
    <Link to="/users/4">User 5</Link>
    <Outlet />
  </>
}