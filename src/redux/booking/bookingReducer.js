import { ADD_FLIGHT, DELETE_FLIGHT } from "./actionTypes";

const initialState = {
  flights: [],
  count: 0,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLIGHT:
      return {
        ...state,
        flights: [...state.flights, action.payload],
        count: state.count + 1,
      };
    case DELETE_FLIGHT:
      return {
        ...state,
        flights: state.flights.filter((flight) => flight.id !== action.payload),
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default bookingReducer;
