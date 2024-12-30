import RoundTrip from "./RoundTrip";
import OneWay from "./OneWay";
import { Routes, Route, useNavigate } from "react-router";

export default function FlightDetails(setType, Data, setData) {
  const navigate = useNavigate();

  const BookFlightsNav = () => {
    navigate("OneWay");
  };
  return (
    <div>
      <Routes>
        <Route path="*">
          <Route
            path="OneWay"
            element={<OneWay data={Data} setData={setData} />}
          />
          <Route
            path="RoundTrip"
            element={<RoundTrip data={Data} setData={setData} />}
          />
        </Route>
      </Routes>
    </div>
  );
}
