import { ADD_FLIGHT } from "./actionTypes";

const initialState = {
  flights: [],
  count: 0,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLIGHT:
      return {
        ...state,
        flight: [...state.flight, action.payload],
      };
    default:
      return state;
  }
};

export default bookingReducer;
