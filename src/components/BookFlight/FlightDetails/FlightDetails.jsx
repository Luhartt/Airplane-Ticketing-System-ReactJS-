import RoundTrip from "./RoundTrip";
import OneWay from "./OneWay";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function FlightDetails({ setType, data, setData }) {
  const navigate = useNavigate();

  const BookFlightsNav = () => {
    navigate("/book-flights/one-way");
  };

  return (
    <div>
      <button onClick={BookFlightsNav} style={{position: "absolute"}}>Test</button>
      <Routes>
        <Route path="one-way" element={<OneWay data={data} setData={setData} />} />
        <Route path="round-trip" element={<RoundTrip data={data} setData={setData} />} />
      </Routes>
    </div>
  );
}
