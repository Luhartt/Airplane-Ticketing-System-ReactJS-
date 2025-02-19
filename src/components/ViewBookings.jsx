import Flights from "./FlightsView";
import "./ViewBookings.css";
import "../Dependencies/Fonts/Fonts.css";
import { useState, useEffect } from "react";
import { transformFlight } from "../Dependencies/getFlight";

function ViewBookings() {
  async function fetchData() {
    const response = await fetch("http://localhost:5000/ViewBookings");
    const json = await response.json();
    const transformedFlight = json.map(transformFlight);
    setFlights(transformedFlight);
    setFilteredFlights(transformedFlight);
  }


  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  const [Sort, setSort] = useState("Oldest");

  const handleClick = (sort) => {
    setSort(sort === "Oldest" ? "Newest" : "Oldest");
    if (sort === "Oldest") {
      setFilteredFlights((flights) =>
        flights.sort(
          (a, b) => new Date(b.DepartureDate) - new Date(a.DepartureDate)
        )
      );
    } else {
      setFilteredFlights((flights) =>
        flights.sort(
          (a, b) => new Date(a.DepartureDate) - new Date(b.DepartureDate)
        )
      );
    }
  };

  useEffect(() => {
    const fetchWrapper = async () => {
      await fetchData();
    }
    fetchWrapper();
  }, []);

  return (
    <section className="ViewBooking">
      <div className="ButtonsContainer">
        <button className={`Button${Sort}`} onClick={() => handleClick(Sort)}>
          {`${Sort} First`}
        </button>
      </div>
      {filteredFlights.length > 0 ? (
        filteredFlights.map((flight, index) => (
          <Flights key={index} FlightData={flight}></Flights>
        ))
      ) : (
        <p>Loading Flights</p>
      )}
    </section>
  );
}
export default ViewBookings;
