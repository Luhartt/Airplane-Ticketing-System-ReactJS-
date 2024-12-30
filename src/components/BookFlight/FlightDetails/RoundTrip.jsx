import { useState } from "react";

import ComboBox from "./ComboBox";

export default function RoundTrip() {
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
  const [Data, setData] = useState({});

  return (
    <ComboBox
      options={Flights}
      setData={setData}
      data={Data}
      keyName="DepartureLocation"
    ></ComboBox>
  );
}
