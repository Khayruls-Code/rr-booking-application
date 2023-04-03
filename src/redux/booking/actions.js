import { ADD_FLIGHT, DELETE_FLIGHT } from "./actionTypes";

export const addFlight = (flight) => {
  return {
    type: ADD_FLIGHT,
    payload: flight,
  };
};
export const deleteFlight = (id) => {
  return {
    type: DELETE_FLIGHT,
    payload: id,
  };
};
