import weatherReducer from "./weatherReducers";
import { combineReducers } from "redux";
import favoriteCitiesReducer from "./favoriteCitiesReducer";

const rootReducer = combineReducers({
    weatherReducer,
    favoriteCitiesReducer,    
});

export default rootReducer;