// import shortid from 'shortid';
import { v4 as uuid } from "uuid";
// import types from './phonebook-types';
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add", (name, phone) => ({
  payload: {
    id: uuid(),
    name,
    phone,
  },
}));

export const deleteContact = createAction("contacts/delete");

export const changeFilter = createAction("contacts/changeFilter");

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);

export const fetchContactsSucces = createAction("contacts/fetchContactsSucces");

export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactsRequest = createAction("contacts/addContactsRequest");

export const addContactsSucces = createAction("contacts/addContactsSucces");

export const addContactsError = createAction("contacts/addContactsError");

export const delContactRequest = createAction("contacts/delContactRequest");

export const delContactSucces = createAction("contacts/delContactSucces");

export const delContactError = createAction("contacts/delContactError");

export const editContactsRequest = createAction("contacts/editContactsRequest");
export const editContactsSuccess = createAction("contacts/editContactsSuccess");
export const editContactsError = createAction("contacts/editContactsError");
