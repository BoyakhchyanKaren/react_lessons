import {combineReducers} from "redux";
import userReducer from "./User/reducer";
import postReducer from "./Post/reducer";
import commentReducer from "./Comment/reducer";
const appReducers = combineReducers({
    postReducer:postReducer,
    userReducer:userReducer,
    commentReducer:commentReducer,
});

export default appReducers;