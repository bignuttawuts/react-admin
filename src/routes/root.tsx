import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  return <>
    <div>
      Apps
      <ul>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </div><br />
    <>
      <Outlet />
    </>
  </>
}