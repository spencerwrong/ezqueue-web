import {
  SEARCH_ERROR,
  SEARCH_QUEUE,
  SEARCH_USER,
} from "../actions/actionTypes";

const intialState = {
  queues: [],
  users: [],
  errors: {},
  loading: true,
};

export default function (state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    case SEARCH_QUEUE:
      return {
        ...state,
        queues: payload,
        loading: false,
      };
    case SEARCH_USER:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    default:
      return state;
  }
}
