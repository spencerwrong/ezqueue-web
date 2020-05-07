import { combineReducers } from "redux";
import authReducer from "./authReducer";
import queueReducer from "./queueReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  auth: authReducer,
  queue: queueReducer,
  search: searchReducer,
});
