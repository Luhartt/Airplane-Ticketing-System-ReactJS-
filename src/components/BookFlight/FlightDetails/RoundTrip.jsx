import { useState } from "react";
import Button from "../../Button";
import "./RoundTrip.css"

import { Components } from "./Components";

export default function RoundTrip({ data, setData }) {
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
  const test = () => {
    Object.entries(data).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  };

  return (
    <>
      <form action="" className="RoundTripForm">
        <>
          <Components.Locations
            data={data}
            setData={setData}
            options={[]}
          ></Components.Locations>
          <Components.DatesRoundTrip
            data={data}
            setData={setData}
            options={[]}
          ></Components.DatesRoundTrip>
          <Components.ClassSeat
            data={data}
            setData={setData}
            options={[]}
          ></Components.ClassSeat>
          <Components.PassengerCount
            data={data}
            setData={setData}
            options={[]}
          ></Components.PassengerCount>
        </>
        <Button
          text={"SEARCH FLIGHT"}
          handleClick={test}
          type={"button"}
        ></Button>
      </form>
    </>
  );
}
