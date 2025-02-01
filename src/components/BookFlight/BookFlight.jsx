import "./BookFlight.css";
import FlightDetails from "./FlightDetails/FlightDetails";
import AvailableFlights from "./AvailableFlights";
import PassengerDetails from "./PassengerDetails";
import Addons from "./Addons";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { DataProvider } from "./DataSetter";
import PaymentDetails from "./PaymentDetails";

export default function BookFlights() {
  const [Type, setType] = useState();
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
        <Addons></Addons>
        <PaymentDetails></PaymentDetails>
      </DataProvider>
    </section>
  );
}
