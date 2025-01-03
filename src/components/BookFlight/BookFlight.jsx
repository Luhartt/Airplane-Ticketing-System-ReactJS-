import "./BookFlight.css";
import FlightDetails from "./FlightDetails/FlightDetails";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


export default function BookFlights() {
  const [Type, setType] = useState();
  const [Data, setData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();



  useEffect (() => {
    if (location.pathname === "/book-flights/*") {
      navigate("/book-flights/one-way");
    }
  }, [location.pathname, navigate]);

  return (
    <section className="bookFlights">
      <FlightDetails data = {Data} setData = {setData} setType = {setType}></FlightDetails>
    </section>
  );
}