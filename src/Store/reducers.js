import commentReducer from "./Comment/reducer";
import statusReducer from "./Status/reducer";
import {combineReducers} from "redux";

const appReducers = combineReducers({
    commentReducer:commentReducer,
    statusReducer:statusReducer,
});

export default appReducers;