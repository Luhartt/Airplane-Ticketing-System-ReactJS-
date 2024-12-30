import "./BookFlight.css";
import FlightDetails from "./FlightDetails/FlightDetails";
import { useState } from "react";


export default function BookFlights() {
  const [Type, setType] = useState();
  const [Data, setData] = useState({});
  return (
    <section className="bookFlights">
      <FlightDetails data = {Data} setData = {setData} setType = {setType}></FlightDetails>
    </section>
  );
}
