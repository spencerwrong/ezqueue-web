import {
  CREATE_QUEUE,
  START_QUEUE,
  END_QUEUE,
  GET_QUEUES,
  QUEUE_ERROR,
  FETCH_USER_QUEUES,
  FOLLOW_ERROR,
  FOLLOW_USER,
  GET_FOLLOWED_QUEUES,
} from "../actions/actionTypes";

const intialState = {
  userQueues: [],
  activeQueue: [],
  savedQueues: [],
  followedQueues: [],
  queues: [],
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
    case FETCH_USER_QUEUES:
      return {
        ...state,
        userQueues: payload,
        loading: false,
      };
    case FOLLOW_USER:
      return {
        ...state,
        followedQueues: [...state.followedQueues, ...payload],
        loading: false,
      };
    case GET_FOLLOWED_QUEUES:
      return {
        ...state,
        followedQueues: payload,
        loading: false,
      };
    case FOLLOW_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    default:
      return state;
  }
}
