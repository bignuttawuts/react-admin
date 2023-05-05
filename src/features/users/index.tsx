import { Button, Form, Input, Table } from 'antd';
import { Link, useLoaderData, useNavigate, useSubmit } from 'react-router-dom';
import { deleteContact, getContacts } from '../../servies/contacts';

export async function userIndexLoader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function UserIndex() {
  const { contacts }: any = useLoaderData();
  const navigate = useNavigate();
  const submit = useSubmit();

  const handleDelete = async (record: any) => {
    await deleteContact(record.id);
    submit(null, { action: "/users", method: 'GET' })
  }

  const columns = [
    {
      title: 'Fullname',
      render: (text: string, record: any) => <Link to={`/users/${record.id}`}>{record.first} {record.last}</Link>
    },
    {
      title: 'Firstname',
      dataIndex: 'first'
    },
    {
      title: 'Lastname',
      dataIndex: 'last'
    },
    {
      title: 'Action',
      render: (text: string, record: any) => <Button onClick={() => handleDelete(record)}>Delete</Button>
    }
  ]

  const onFinish = (values: any) => {

  };

  const onFinishFailed = (errorInfo: any) => {

  };

  return (
    <>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='Firstname'
          name='first'
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Lastname'
          name='last'
        >
          <Input />
        </Form.Item>
        <Button htmlType="submit">
          Search
        </Button>
      </Form>
      <Button onClick={() => navigate('/users/new')}>Create user</Button>
      <Table dataSource={contacts} columns={columns} rowKey={"id"} />
    </>
  );
}