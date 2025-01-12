import { Route, Routes } from "react-router";
import { useData } from "./DataSetter";
import Flight from "../Flight";
import "./AvailableFlights.css";
import { useState, useEffect } from "react";
import { Buttons } from "../Button";

export default function AvailableFlights({ type = "departure-flight" }) {
  const AvailableFlight = () => {
    const AvailableFlightsData = [
      {
        FlightID: "ABC123",
        DepartureLocation: "MNL",
        DepartureTime: "24:00",
        ArrivalLocation: "ORD",
        ArrivalTime: "13:00",
        Price: 2500.0,
        RemainingSeats: 50,
      },
      {
        FlightID: "ABC123",
        DepartureLocation: "MNL",
        DepartureTime: "24:00",
        ArrivalLocation: "ORD",
        ArrivalTime: "13:00",
        Price: 2500.0,
        RemainingSeats: 50,
      },
      {
        FlightID: "ABC123",
        DepartureLocation: "MNL",
        DepartureTime: "24:00",
        ArrivalLocation: "ORD",
        ArrivalTime: "13:00",
        Price: 2500.0,
        RemainingSeats: 50,
      },
      {
        FlightID: "ABC123",
        DepartureLocation: "MNL",
        DepartureTime: "24:00",
        ArrivalLocation: "ORD",
        ArrivalTime: "13:00",
        Price: 2500.0,
        RemainingSeats: 50,
      },
      {
        FlightID: "ABC123",
        DepartureLocation: "MNL",
        DepartureTime: "24:00",
        ArrivalLocation: "ORD",
        ArrivalTime: "13:00",
        Price: 2500.0,
        RemainingSeats: 50,
      },
      {
        FlightID: "ABC123",
        DepartureLocation: "MNL",
        DepartureTime: "24:00",
        ArrivalLocation: "ORD",
        ArrivalTime: "13:00",
        Price: 2500.0,
        RemainingSeats: 50,
      },
    ];

    const [Selected, setSelected] = useState(-1);
    const { data, setData } = useData();
    const handleSelectFlight = (index, item) => {
      setSelected(index);
      setData({ ...data, ["SelectedFlight"]: item.FlightID });
    };
    return (
      <>
        <div className="AvailableFlightContainer">
          <h1>Select Departure Flights</h1>
          {AvailableFlightsData.map((item, index) => (
            <fieldset
              className={`AvailableFlight ${
                Selected === index && "SelectedFlight"
              }`}
              key={`${index} container`}
              onClick={() => handleSelectFlight(index, item)}
            >
              <legend>{item.FlightID}</legend>
              <Flight FlightData={item}></Flight>
              <div className="Text">
                <p>{item.RemainingSeats} Seats Available</p>
                <p>Price: {item.Price}.00</p>
              </div>
            </fieldset>
          ))}
        </div>
        <div className="Buttons">
          <Buttons.BackButton text={"Back"}></Buttons.BackButton>
          <Buttons.ContinueButton text={"Continue"}></Buttons.ContinueButton>
        </div>
      </>
    );
  };

  return (
    <Routes>
      <Route path={type} element={<AvailableFlight />}></Route>
    </Routes>
  );
}
