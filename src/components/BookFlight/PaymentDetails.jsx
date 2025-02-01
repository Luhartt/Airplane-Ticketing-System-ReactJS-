import { navigate, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { transformFlight } from "../../Dependencies/getFlight";
import Flights from "../FlightsView";
import "./style.css";

const calculateTotalPrice = (acquiredData, flightPrice) => {
  let seatMultiplier = 1;
  if (acquiredData["Class Seat"] === "Business Economy") seatMultiplier = 1.5;
  if (acquiredData["Class Seat"] === "Premium") seatMultiplier = 2;
  if (acquiredData["Class Seat"] === "Premium Economy") seatMultiplier = 2.5;
  if (acquiredData["Class Seat"] === "First Class") seatMultiplier = 3;

  let costs = {
    adultSubtotal: 0,
    childrenSubtotal: 0,
    infantSubtotal: 0,
  };

  for (const key in acquiredData) {
    if (key.includes("Adult") || key.includes("Passenger")) {
      let discounted = acquiredData[key].Discounted;
      let typeMultiplier = 1;
      costs.adultSubtotal = CalculatePrice(
        discounted,
        typeMultiplier,
        seatMultiplier,
        flightPrice
      );
    }
    if (key.includes("Children")) {
      let typeMultiplier = 0.7;
      costs.childrenSubtotal = CalculatePrice(
        false,
        typeMultiplier,
        seatMultiplier,
        flightPrice
      );
    }
    if (key.includes("Infant")) {
      let typeMultiplier = 0.5;
      costs.infantSubtotal = CalculatePrice(
        false,
        typeMultiplier,
        seatMultiplier,
        flightPrice
      );
    }
    return costs;
  }
};

const CalculatePrice = (
  Discounted,
  typeMultiplier,
  seatMultiplier,
  flightPrice
) => {
  let basePrice = flightPrice * typeMultiplier * seatMultiplier;
  let subTotal = 0;
  if (Discounted) {
    let discount = basePrice * 0.2;
    subTotal = basePrice - discount;
  } else {
    let tax = basePrice * 0.12;
    subTotal = basePrice + tax;
  }
  return subTotal;
};

const data = {
  Type: "Round Trip",
  SelectedDepartureFlightPrice: 2500,
  SelectedReturnFlightPrice: 2500,
  adultCount: 2,
  childrenCount: 1,
  infantCount: 0,
  SelectedAddonIndex: [0, 1],
  "Class Seat": "Economy",
  "Adult 1": {
    FirstName: "John",
    LastName: "Doe",
    Age: "24",
    Birthdate: "1997-01-01",
    Discounted: true,
  },
  "Adult 2": {
    FirstName: "John",
    LastName: "Doe",
    Age: "24",
    Birthdate: "1997-01-01",
  },
  "Children 1": {
    FirstName: "Jane",
    LastName: "Doe",
    Age: "7",
    Birthdate: "2014-01-01",
  },
};

const sampleDepartureFlight = {
  BookingDate: "2021-08-01",
  ReferenceNo: "123456",
  AirplaneNumber: "123",
  DepartureDate: "2021-08-01T08:00:00",
  Type: "Departure",
  DepartureAirportCode: "MNL",
  ArrivalAirportCode: "CEB",
  ArrivalDate: "2021-08-01T10:00:00",
};

const sampleReturnFlight = {
  BookingDate: "2021-08-01",
  ReferenceNo: "123456",
  AirplaneNumber: "123",
  DepartureDate: "2021-08-01T08:00:00",
  Type: "Return",
  DepartureAirportCode: "CEB",
  ArrivalAirportCode: "MNL",
  ArrivalDate: "2021-08-01T10:00:00",
};

const PaymentDetailsContents = (data, type) => {
  let departureCosts = calculateTotalPrice(
    data,
    data.SelectedDepartureFlightPrice
  );
  if (data.Type === "Round Trip") {
    let returnCosts = calculateTotalPrice(data, data.SelectedReturnFlightPrice);
  }

  let flight = transformFlight(sampleDepartureFlight);
  let counts = [
    { type: "Adult", count: data.adultCount, costs: departureCosts.adultSubtotal },
    { type: "Children", count: data.childrenCount, costs: departureCosts.childrenSubtotal },
    { type: "Infant", count: data.infantCount, costs: departureCosts.infantSubtotal },
  ]
  return (
    <section className="payment-details">
      <Flights FlightData={flight}></Flights>
      <p className="seat-class">Seat Class: {data.Seat}</p>
      <p className="plane-number">Plane Number: {flight.AirplaneNumber}</p>
      <div className="passengers">

      </div>
    </section>
  );
};

export default function PaymentDetails() {
  return (
    <Routes>
      <Route
        path="payment-details"
        element={<PaymentDetailsContents></PaymentDetailsContents>}
      ></Route>
    </Routes>
  );
}
