import { navigate, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";

const PaymentDetailsContents = () => {

  const MockData = {
    Type: "Round Trip",
    SelectedDepartureFlightPrice: 2500,
    SelectedReturnFlightPrice: 2500,
    adultCount: 2,
    childrenCount: 1,
    infantCount: 0,
    SelectedAddonIndex: [0, 1],
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

  let departureCosts = calculateTotalPrice(MockData, MockData.SelectedDepartureFlightPrice);
  if(MockData.Type === "Round Trip") {
    let returnCosts = calculateTotalPrice(MockData, MockData.SelectedReturnFlightPrice);
  }


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
