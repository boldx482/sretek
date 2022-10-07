import {combineReducers} from "redux";
//import { reducer as formReducer } from "redux-form";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
    blogs: blogReducer
});

export default rootReducer;