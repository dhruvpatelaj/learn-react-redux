import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

//~ combines all the reducers into one
const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
});

export default rootReducer;
