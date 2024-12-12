import React from "react";
import Flight from "./Flight";
import "../Dependencies/Fonts/Fonts.css";
import "./FlightsView.css";

export default function Flights() {
  const sampleFlight = {
    DepartureLocation: "ORD",
    DepartureTime: "19:00",
    ArrivalLocation: "JFK",
    ArrivalTime: "20:00",
  };
  return (
    <div className="FlightsView">
      <div>
        <p>FlightNumber</p>
        <p>DepartureDate</p>
      </div>
      <div>
        <Flight FlightData={sampleFlight}></Flight>
        
        <button>View</button>
      </div>
    </div>
  );
}
