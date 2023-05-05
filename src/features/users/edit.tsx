import { Button, Form, Input } from 'antd';
import { redirect, useParams, useSubmit } from 'react-router-dom';

import { updateContact } from '../../servies/contacts';

export async function userEditAction({ request, params }: any) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/users/${params.contactId}`);
}

export default function UserEdit() {
  const { contactId } = useParams()
  const submit = useSubmit()

  const onFinish = (values: any) => {
    submit(values, { action: `/users/${contactId}/edit`, method: 'post' })
  };

  return <>
    <Form
      onFinish={onFinish}
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
        Submit
      </Button>
    </Form>
  </>
}