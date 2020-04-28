import {
  CREATE_QUEUE,
  START_QUEUE,
  END_QUEUE,
  GET_QUEUES,
  QUEUE_ERROR
} from "../actions/actionTypes";

const intialState = {
  queues: [],
  queue: null,
  loading: true,
  errors: {}
};

export default function(state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_QUEUES:
      return {
        ...state,
        queues: payload,
        loading: false
      };
    case QUEUE_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false
      };
    case CREATE_QUEUE:
      return {
        ...state,
        queues: [...state.queues, payload],
        loading: false
      };
  }
}
