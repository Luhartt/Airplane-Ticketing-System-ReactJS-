import Flights from "./FlightsView";
import "./ViewBookings.css";
import "../Dependencies/Fonts/Fonts.css";
import { useState } from "react";

export default function FlightsDashboard() {
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

  const [Sort, setSort] = useState("Oldest");

  const handleClick = (sort) => {
    setSort(sort === "Oldest" ? "Newest" : "Oldest");
    };

  return (
    <section className="ViewBooking">
      <div className="ButtonsContainer">
        <button className={`Button${Sort}`} onClick={()=>handleClick(Sort)}>
            {`${Sort} First`}
        </button>
      </div>
      <Flights FlightData={sampleFlight}></Flights>
      <Flights FlightData={sampleFlight}></Flights>
      <Flights FlightData={sampleFlight}></Flights>
    </section>
  );
}
