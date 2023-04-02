import { ADD_FLIGHT } from "./actionTypes";

export const addFlight = (flight) => {
  return {
    type: ADD_FLIGHT,
    payload: flight,
  };
};
