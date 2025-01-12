import RoundTrip from "./RoundTrip";
import OneWay from "./OneWay";
import "./FlightDetails.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useData } from "../DataSetter";

export default function FlightDetails({ setType }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [animate, setAnimate] = useState(false);
  const [flightType, setFlightType] = useState(
    location.pathname === "/book-flights/one-way" ? "One Way" : "Round Trip"
  );

  const {data, setData} = useData();
  useEffect(() => {
    setFlightType(
      location.pathname === "/book-flights/one-way" ? "One Way" : "Round Trip"
    );
  }, [location.pathname]);

  const handleComponentChange = () => {
    setAnimate(true);
    setFlightType(
      location.pathname === "/book-flights/one-way" ? "Round Trip" : "One Way"
    );
    navigate(
      location.pathname === "/book-flights/one-way"
        ? "/book-flights/round-trip"
        : "/book-flights/one-way"
    );
    setType(
      location.pathname === "/book-flights/one-way" ? "One Way" : "Round Trip"
    );
    setTimeout(() => {
      setAnimate(false);
    }, 400);
    setData({ })
  };

const handleSubmit = (type) =>{
  Object.entries(data).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}

  return (
    <div>
      <div className="ButtonContainer">
        <div onClick={handleComponentChange}>
          <p
            className={
              flightType === "One Way"
                ? animate
                  ? "WhiteText"
                  : "WhiteText"
                : ""
            }
          >
            One - Way
          </p>
          <p
            className={
              flightType === "One Way" ? (animate ? "" : "") : "WhiteText"
            }
          >
            Round Trip
          </p>
          <div
            className={`${flightType === "One Way" ? "OneWay" : "RoundTrip"}${
              animate ? "Animate" : ""
            }`}
          ></div>
        </div>
      </div>
      <Routes>
        <Route
          path="one-way"
          element={<OneWay handleSubmit={handleSubmit}/>}
        />
        <Route
          path="round-trip"
          element={<RoundTrip handleSubmit={handleSubmit}/>}
        />
      </Routes>
    </div>
  );
}
