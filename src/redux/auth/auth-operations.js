import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerError,
  logInRequest,
  logInSuccess,
  logInError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";
import { infoNotify, warnNotify } from "../../services/tostify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
    warnNotify(error.message);
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(logInRequest());
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    dispatch(logInSuccess(data));
    infoNotify("Добро пожаловать");
  } catch (error) {
    dispatch(logInError(error.message));
    warnNotify(error.message);
  }
};

const logOut = () => async (dispatch) => {
  dispatch(logOutRequest());

  try {
    await axios.post("/users/logout");
    token.unset();
    dispatch(logOutSuccess());
  } catch (error) {
    dispatch(logOutError(error.message));
    warnNotify(error.message);
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const { data } = await axios.get("user/current");
    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

const authOperations = {
  token,
  register,

  logIn,
  logOut,
  getCurrentUser,
};

export default authOperations;
