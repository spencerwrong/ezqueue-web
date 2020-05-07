import axios from "axios";
import { SEARCH_QUEUE, SEARCH_USER, SEARCH_ERROR } from "./actionTypes";

export const search = ({ keyword }) => async (dispatch) => {
  try {
    const resQueue = await axios.get(`/api/search/queue?keyword=${keyword}`);
    const resUser = await axios.get(`/api/search/user?keyword=${keyword}`);

    dispatch({
      type: SEARCH_QUEUE,
      payload: resQueue.data,
    });

    dispatch({
      type: SEARCH_USER,
      payload: resUser.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    console.log(errors);

    dispatch({
      type: SEARCH_ERROR,
    });
  }
};
