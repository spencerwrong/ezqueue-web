import {
  CREATE_QUEUE,
  START_QUEUE,
  END_QUEUE,
  GET_QUEUES,
  QUEUE_ERROR,
} from "../actions/actionTypes";

const intialState = {
  userQueues: [],
  activeQueue: [],
  savedQueues: [],
  followedQueues: [],
  queue: null,
  loading: true,
  errors: {},
};

export default function (state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_QUEUES:
      return {
        ...state,
        queues: payload,
        loading: false,
      };
    case QUEUE_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    case CREATE_QUEUE:
      return {
        ...state,
        userQueues: [...state.userQueues, payload],
        loading: false,
      };
    default:
      return state;
  }
}
