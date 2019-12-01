import axios from "axios";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "./actionTypes";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({
  username,
  firstName,
  lastName,
  email,
  password
}) => async dispatch => {
  try {
    const res = await axios.post("/api/users", {
      // username: this.state.username,
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    });

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data // returns a token
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({
      type: SIGNUP_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  try {
    const res = await axios.post("/api/auth", {
      email: email,
      password: password
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data // returns a token
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({
      type: LOGIN_FAIL
    });
  }
};
