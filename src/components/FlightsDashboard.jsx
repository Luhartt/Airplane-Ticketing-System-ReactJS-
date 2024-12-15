import Flights from "./FlightsView";
import "./FlightsDashboard.css";
import "../Dependencies/Fonts/Fonts.css";
import { useState } from "react";

function FlightsDashboard() {
  const sampleFlight = {
    AirplaneNumber: "AB123",
    DepartureDate: "December 09, 2024",
    FlightData: {
      DepartureLocation: "ORD",
      DepartureTime: "19:00",
      ArrivalLocation: "JFK",
      ArrivalTime: "20:00",
    },
  };

  const [Active, setActive] = useState(0);
  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <>
      <section className="FlightsDashboard">
        <div className="ButtonsContainer">
          {["All", "Local", "International"].map((item, index) => (
            <button
              key={index}
              className={`Button${Active === index ? "-Active" : ""}`}
              onClick={() => handleClick(index)}
            >
              {item}
            </button>
          ))}
        </div>
        <Flights FlightData={sampleFlight}></Flights>
        <Flights FlightData={sampleFlight}></Flights>
        <Flights FlightData={sampleFlight}></Flights>
      </section>
    </>
  );
}

export default FlightsDashboard;