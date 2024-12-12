import React from "react";
import AirplaneLines from "../Dependencies/AirplaneLines.png";
import "./Flight.css";
import "../Dependencies/Fonts/Fonts.css"

export default function Flight({FlightData}) {

  return (
    <div className="Flight">
      <div>
        <h1>{FlightData.DepartureLocation}</h1>
        <p>{FlightData.DepartureTime}</p>
      </div>
      <img src={AirplaneLines} alt="" />
      <div>
        <h1>{FlightData.ArrivalLocation}</h1>
        <p>{FlightData.ArrivalTime}</p>
      </div>
    </div>
  );
}
