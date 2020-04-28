import axios from "axios";
import {
  CREATE_QUEUE,
  START_QUEUE,
  CREATE_START_QUEUE,
  END_QUEUE,
  GET_QUEUES,
  QUEUE_ERROR,
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

    dispatch({
      type: CREATE_QUEUE,
      payload: res.data, // returns the queue
    });
  } catch (err) {
    const errors = err.response.data.errors;

    console.log(errors);

    dispatch({
      type: QUEUE_ERROR,
    });
  }
};
