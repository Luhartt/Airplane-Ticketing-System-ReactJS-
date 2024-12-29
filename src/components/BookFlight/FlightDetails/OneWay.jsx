import { useState } from "react";
import ComboBox from "./ComboBox";

export default function OneWay() {
  const Flights = [
    "Manila",
    "Cebu",
    "Taguig",
    "Manila",
    "Cebu",
    "Taguig",
    "Manila",
    "Cebu",
    "Taguig",
  ];
  const [Data, setData] = useState(null);



  return <ComboBox options={Flights} onSelect={setData} data = {Data} keyName="DepartureLocation"></ComboBox>;
}
