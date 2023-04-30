import { Button, Descriptions } from 'antd';
import { deleteContact, getContact } from '../../servies/contacts';
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';

export async function userLoader({ params }: any) {
  const user = await getContact(params.contactId);
  return { user }
}

export default function UserView() {
  const { user }: any = useLoaderData();
  const navigate = useNavigate();
  const onEditHandle = () => navigate(`/users/${user.id}/edit`)
  const onDeleteHandle = async () => {
    await deleteContact(user.id);
    redirect("/");
  }

  return <>
    <Descriptions title="User Info" bordered>
      <Descriptions.Item label="UserName">{user.first} {user.last}</Descriptions.Item>
      <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
      <Descriptions.Item label="Occupation">Hangzhou, Zhejiang</Descriptions.Item>
      <Descriptions.Item label="Remark">empty</Descriptions.Item>
      <Descriptions.Item label="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
    </Descriptions>
    <Button onClick={onEditHandle}>Edit</Button>
    <Button onClick={onDeleteHandle}>Delete</Button>
  </>
}