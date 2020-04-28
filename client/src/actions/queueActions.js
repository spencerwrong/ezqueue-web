import axios from "axios";
import {
  CREATE_QUEUE,
  START_QUEUE,
  END_QUEUE,
  GET_QUEUES,
  QUEUE_ERROR
} from "./actionTypes";

// Get Queues
export const getQueues = () => async dispatch => {
  try {
    const res = await axios.get("/api/queues");

    dispatch({
      type: GET_QUEUES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: QUEUE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create Queue
export const create = ({ name, description, location }) => async dispatch => {
  try {
    const res = await axios.post("/api/queue/create", {
      name: name,
      description: description,
      location: location
    });

    dispatch({
      type: CREATE_QUEUE,
      payload: res.data // returns a token
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({
      type: QUEUE_ERROR
    });
  }
};
