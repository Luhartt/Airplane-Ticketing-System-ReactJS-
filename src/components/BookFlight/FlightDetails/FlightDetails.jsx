import RoundTrip from "./RoundTrip";
import OneWay from "./OneWay";
import "./FlightDetails.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FlightDetails({ setType, data, setData }) {
  const navigate = useNavigate();
  const [flightType, setFlightType] = useState("One Way");

  const handleComponentChange = () => {
    setFlightType(flightType === "One Way" ? "Round Trip" : "One Way");
    navigate(
      flightType === "One Way"
        ? "/book-flights/one-way"
        : "/book-flights/round-trip"
    );
  };

  useEffect(() => {
    navigate("/book-flights/one-way");
  }, []);
  return (
    <div>
      <div className="ButtonContainer">
        <div onClick={handleComponentChange}>
          <p className={flightType === "One Way" ? "" : "WhiteText"}>
            One - Way
          </p>
          <p className={flightType === "One Way" ? "WhiteText" : ""}>
            Round Trip
          </p>
          <div
            className={flightType === "One Way" ? "RoundTrip" : "OneWay"}
          ></div>
        </div>
      </div>
      <Routes>
        <Route
          path="one-way"
          element={<OneWay data={data} setData={setData} />}
        />
        <Route
          path="round-trip"
          element={<RoundTrip data={data} setData={setData} />}
        />
      </Routes>
    </div>
  );
}
