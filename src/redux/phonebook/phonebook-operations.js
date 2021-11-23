import axios from "axios";
import {
  fetchContactsRequest,
  fetchContactsSucces,
  fetchContactsError,
  addContactsRequest,
  addContactsSucces,
  addContactsError,
  delContactRequest,
  delContactSucces,
  delContactError,
  editContactsRequest,
  editContactsSuccess,
  editContactsError,
} from "./phonebook-actions";
import { infoNotify, warnNotify } from "../../services/tostify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get("/contacts");

    dispatch(fetchContactsSucces(data));
  } catch (error) {
    dispatch(fetchContactsError(error.massage));
    warnNotify(error.message);
  }
};

export const addContact = (name, phone) => async (dispatch) => {
  const contact = { name, phone };

  dispatch(addContactsRequest());
  infoNotify("Запись добавлена");
  try {
    const { data } = await axios.post("/contacts", contact);

    dispatch(addContactsSucces(data));
  } catch (error) {
    dispatch(addContactsError(error.massage));
    warnNotify(error.message);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(delContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(delContactSucces(id));
  } catch (error) {
    dispatch(delContactError(error.massage));
    warnNotify(error.message);
  }
};

export const editContacts = (id, update) => async (dispatch) => {
  dispatch(editContactsRequest());

  try {
    const { data } = await axios.patch(`/contacts/${id}`, update);
    console.log(data);
    dispatch(editContactsSuccess(data));
  } catch (error) {
    dispatch(editContactsError(error.massage));
    warnNotify(error.message);
  }
};
