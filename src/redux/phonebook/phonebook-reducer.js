import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";

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
  changeFilter,
  editContactsRequest,
  editContactsSuccess,
  editContactsError,
} from "./phonebook-actions";

const contactsReducer = createReducer(
  [],

  {
    [fetchContactsSucces]: (_, { payload }) => payload,
    [addContactsSucces]: (state, { payload }) => [...state, payload],
    [delContactSucces]: (state, { payload }) =>
      state.filter((contact) => {
        return contact.id !== payload;
      }),

    [editContactsSuccess]: (state, { payload }) => {
      const newState = state.filter((contact) => contact.id !== payload.id);
      return [...newState, payload];
    },
  }
);

const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSucces]: () => false,
  [fetchContactsError]: () => false,

  [addContactsRequest]: () => true,
  [addContactsSucces]: () => false,
  [addContactsError]: () => false,

  [delContactRequest]: () => true,
  [delContactSucces]: () => false,
  [delContactError]: () => false,

  [editContactsRequest]: () => true,
  [editContactsSuccess]: () => false,
  [editContactsError]: () => false,
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const counterReduser = combineReducers({
  item: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export default counterReduser;
