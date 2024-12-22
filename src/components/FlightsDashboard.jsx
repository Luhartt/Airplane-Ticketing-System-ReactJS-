import Flights from "./FlightsView";
import "./FlightsDashboard.css";
import "../Dependencies/Fonts/Fonts.css";
import { useEffect, useState } from "react";

function FlightsDashboard() {
  async function fetchData() {
    const response = await fetch("http://localhost:5000/FlightsDashboard");
    const json = await response.json();
    const transformedFlight = json.map(transformFlight)
    setFlights(transformedFlight);
    setFilteredFlights(transformedFlight)
  }

  function transformFlight(rawflight) {
    
    function formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("en-us", options);
    }

    function formatTime(dateString) {
      const timeString = dateString.substring(11, 16);
      return timeString;
    }

    return {
      AirplaneNumber: rawflight.AirplaneNumber,
      DepartureDate: formatDate(rawflight.DepartureDate),
      Type: rawflight.Type,
      FlightData: {
        DepartureLocation: rawflight.DepartureAirportCode,
        ArrivalLocation: rawflight.ArrivalAirportCode,
        ArrivalTime: formatTime(rawflight.ArrivalDate),
        DepartureTime: formatTime(rawflight.DepartureDate),
      },
    };
  }

  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  const [Active, setActive] = useState(0);
  const handleClick = (index, item) => {
    setActive(index);
    if(item ==="All"){
      setFilteredFlights(flights);
    }else{
      setFilteredFlights(flights.filter(flight => flight.Type === item))
    }
  };

  useEffect(() => {
    const fetchWrapper = async () => {
      await fetchData();
    }
    fetchWrapper();
  }, []);

  return (
    <>
      <section className="FlightsDashboard">
        <div className="ButtonsContainer">
          {["All", "Local", "International"].map((item, index) => (
            <button
              key={index}
              className={`Button${Active === index ? "-Active" : ""}`}
              onClick={() => handleClick(index, item)}
            >
              {item}
            </button>
          ))}
        </div>
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight, index) => (
            <Flights key={index} FlightData={flight}></Flights>
          ))
        ) : (
          <p>Loading Flights</p>
        )}
      </section>
    </>
  );
}

export default FlightsDashboard;
