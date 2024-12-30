import { useState } from "react";

import ComboBox from "./ComboBox";

export default function RoundTrip(data, setData) {
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

  return (
    <ComboBox
      options={Flights}
      setData={setData}
      data={data}
      keyName="DepartureLocation"
    ></ComboBox>
  );
}
