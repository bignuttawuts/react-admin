import { Button, Table } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const columns = [
  {
    title: 'Username',
    dataIndex: 'username',
    render: (text: string, record: any) => <Link to={`/users/${record.userId}`}>{text}</Link>
  },
  {
    title: 'Firstname',
    dataIndex: 'firstname'
  },
  {
    title: 'Lastname',
    dataIndex: 'lastname'
  }
]

const datas = [
  {
    userId: '4a8d7f7', username: 'admin001', firstname: 'John', lastname: 'Doe'
  },
  {
    userId: '4a8d7f7', username: 'admin002', firstname: 'Sara', lastname: 'Doe'
  }
]

export default function UserIndex() {
  const navigate = useNavigate();
  return (
    <p>
      Search criteria
      <Button onClick={() => navigate('/users/new')}>Create user</Button>
      <Table dataSource={datas} columns={columns} key={'userId'} />
    </p>
  );
}