import { Route, Routes } from "react-router";
import Detail from "./PassengerDetails/Detail";
import { useData } from "./DataSetter";
import "./PassengerDetails.css";

export default function PassengerDetails() {
  const { data, setData } = useData();
  const AdultCount = data.Adult;
  const childrenCount = data.Children || 0;
  const infantCount = data.Children || 0;
  const totalCount = AdultCount + childrenCount + infantCount;

  const PassengerDetails = () => (
    <div className="PassengerDetails">
      <Detail totalCount={1}></Detail>
    </div>
  );

  return (
    <Routes>
      <Route path="passenger-details" element={<PassengerDetails />}></Route>
    </Routes>
  );
}
