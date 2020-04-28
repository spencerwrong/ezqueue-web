import { combineReducers } from "redux";
import authReducer from "./authReducer";
import queueReducer from "./queueReducer";

export default combineReducers({ auth: authReducer });

// export default combineReducers({ auth: authReducer, queue: queueReducer });
