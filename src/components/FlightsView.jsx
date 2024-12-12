import React from "react";
import Flight from "./Flight";
import "../Dependencies/Fonts/Fonts.css";
import "./FlightsView.css";

export default function Flights({FlightData}) {
  return (
    <div className="FlightsView">
      <div>
        <p>{FlightData.AirplaneNumber}</p>
        <p>{FlightData.DepartureDate}</p>
      </div>
      <div>
        <Flight FlightData={FlightData.FlightData}></Flight>
        <button>View</button>
      </div>
    </div>
  );
}
