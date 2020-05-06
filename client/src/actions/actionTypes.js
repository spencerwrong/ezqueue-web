// Action Types

// Authentication Actions
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

// Queue Actions
export const CREATE_QUEUE = "CREATE_QUEUE";
export const START_QUEUE = "START_QUEUE";
export const CREATE_START_QUEUE = "CREATE_START_QUEUE";
export const END_QUEUE = "END_QUEUE";
export const GET_QUEUES = "GET_QUEUES";
export const QUEUE_ERROR = "QUEUE_ERROR";
export const FETCH_USER_QUEUES = "FETCH_USER_QUEUES";
export const ADD_ACTIVE_QUEUE = "ADD_ACTIVE_QUEUE";
export const JOIN_QUEUE = "JOIN_QUEUE";

// Search Actions
export const SEARCH_QUEUE = "SEARCH_QUEUE";
export const SEARCH_USER = "SEARCH_USER";
export const SEARCH_ERROR = "SEARCH_ERROR";
