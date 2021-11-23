import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  registerSuccess,
  registerError,
  logInSuccess,
  logInError,
  logOutSuccess,
  logOutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [logInSuccess]: (_, { payload }) => payload.user,
  [logOutSuccess]: () => initialState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [logInSuccess]: (_, { payload }) => payload.token,
  [logOutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [logInError]: setError,
  [logOutError]: setError,
  [getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [logInSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [logOutSuccess]: () => false,
  [registerError]: () => false,
  [logInError]: () => false,
  [logOutError]: () => true,
  [getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
