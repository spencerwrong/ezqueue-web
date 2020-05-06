import axios from "axios";
import {
  CREATE_QUEUE,
  START_QUEUE,
  CREATE_START_QUEUE,
  END_QUEUE,
  GET_QUEUES,
  QUEUE_ERROR,
  FETCH_USER_QUEUES,
  ADD_ACTIVE_QUEUE,
  JOIN_QUEUE,
  FOLLOW_USER,
  GET_FOLLOWED_QUEUES,
  FOLLOW_ERROR,
} from "./actionTypes";

// Get Queues
export const getActive = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/queue");

    dispatch({
      type: GET_QUEUES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: QUEUE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create Queue
export const create = ({ name, description, location }) => async (dispatch) => {
  try {
    const res = await axios.post("/api/queue/create", {
      name: name,
      description: description,
      location: location,
    });
    const info = {
      active: false,
      count: 0,
    };
    const queue = { ...res.data, ...info };
    dispatch({
      type: CREATE_QUEUE,
      payload: queue, // returns the queue
    });
  } catch (err) {
    const errors = err.response.data.errors;

    console.log(errors);

    dispatch({
      type: QUEUE_ERROR,
    });
  }
};

// Update a Queue
export const update = ({ queue }) => async (dispatch) => {};

// Fetch logged in user's queues
export const fetchUserQueues = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/queue/user");

    dispatch({
      type: FETCH_USER_QUEUES,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    console.log(errors);

    dispatch({
      type: QUEUE_ERROR,
    });
  }
};

export const getQueues = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/queue/");

    dispatch({
      type: GET_QUEUES,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    console.log(errors);

    dispatch({
      type: QUEUE_ERROR,
    });
  }
};

export const follow = (username) => async (dispatch) => {
  try {
    const res = await axios.post("/api/queue/follow", { username });
    dispatch({
      type: FOLLOW_USER,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    console.log(errors);

    dispatch({
      type: FOLLOW_ERROR,
    });
  }
};

export const getFollowed = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/queue/followed");
    dispatch({
      type: GET_FOLLOWED_QUEUES,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    console.log(errors);

    dispatch({
      type: QUEUE_ERROR,
    });
  }
};
