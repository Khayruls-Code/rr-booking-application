import React from "react";
import { BookingForm } from "./BookingForm";
import { FlightTable } from "./FlightTable";
import { Header } from "./Header";

export const FlightBook = () => {
  return (
    <>
      <Header />
      <BookingForm />
      <FlightTable />
    </>
  );
};
