import "./BookFlight.css";
import FlightDetails from "./FlightDetails/FlightDetails";
import AvailableFlights from "./AvailableFlights";
import PassengerDetails from "./PassengerDetails";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { DataProvider } from "./DataSetter";

export default function BookFlights() {
  const [type, setType] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/book-flights/*") {
      navigate("/book-flights/one-way");
    }
  }, [location.pathname, navigate]);

  return (
    <section className="bookFlights">
      <DataProvider>
        <FlightDetails setType={setType}></FlightDetails>
        <AvailableFlights></AvailableFlights>
        <PassengerDetails></PassengerDetails>
      </DataProvider>
    </section>
  );
}
