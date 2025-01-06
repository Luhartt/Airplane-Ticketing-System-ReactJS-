import { useState } from "react";

import { Components } from "./Components";

export default function RoundTrip({data, setData}) {
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
    <>
      <form action="">
        <>
          <Components.Locations data = {data} setData = {setData} options = {[]}></Components.Locations>
        </>

      </form>
    </> 
  );
}
