import { combineReducers } from "redux";
import bookingReducer from "./booking/bookingReducer";

const rootReducer = combineReducers({
  allFlight: bookingReducer,
});

export default rootReducer;
