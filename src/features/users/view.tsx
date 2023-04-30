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
      <Descriptions.Item label="Firstname">{user.first}</Descriptions.Item>
      <Descriptions.Item label="Lastname">{user.last}</Descriptions.Item>
    </Descriptions>
    <Button onClick={onEditHandle}>Edit</Button>
    <Button onClick={onDeleteHandle}>Delete</Button>
  </>
}