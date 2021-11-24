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

const item = createReducer(
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

const isLoading = createReducer(false, {
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

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  item,
  filter,
  isLoading,
});
