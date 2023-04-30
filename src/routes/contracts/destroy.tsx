import { redirect } from "react-router-dom";
import { deleteContact } from '../../servies/contacts';

export async function destroyAction({ params }: any) {
  // throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}