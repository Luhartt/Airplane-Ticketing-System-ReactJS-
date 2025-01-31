import { navigate, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";

const PaymentDetailsContents = () => {
  const Type = "One Way";
  const MockData = {
    Type: "Round Trip",
    SelectedDepartureFlightPrice: 2500,
    SelectedReturnFlightPrice: 2500,
    adultCount: 2,
    childrenCount: 1,
    infantCount: 0,
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

  const countDiscountedPassengers = (data) => {
    let discountedPassengers = 0;
    for (const key in data) {
      if (data[key].Discounted) {
        discountedPassengers++;
      }
    }
    return discountedPassengers
  };

  const calculateTotalPrice = (acquiredData) => {
    const { adultCount, childrenCount, infantCount, SelectedDepartureFlightPrice } = acquiredData;
    const SelectedReturnFlightPrice = acquiredData.SelectedReturnFlightPrice || 0;
    const numDiscountedPassengers = countDiscountedPassengers(acquiredData);
    const childrenMultiplier = 0.7
    const infantMultiplier = 0.3
    
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
