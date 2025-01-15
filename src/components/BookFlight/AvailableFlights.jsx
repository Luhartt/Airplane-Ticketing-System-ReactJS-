import { Route, Routes, useNavigate, useLocation } from "react-router";
import { useData } from "./DataSetter";
import Flight from "../Flight";
import "./AvailableFlights.css";
import { useState } from "react";
import { Buttons } from "../Button";

export default function AvailableFlights() {
  const AvailableFlight = ({ type }) => {
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
    const { data, setData } = useData();

    const [Selected, setSelected] = useState(
      data[type === "Departure" ? "Departure Index" : "Return Index" || -1]
    );
    const navigate = useNavigate();
    const location = useLocation();
    const tripType = data.Type;

    const handleSelectFlight = (index, item) => {
      setSelected(index);
      setData({
        ...data,
        [`Selected ${
          type === "Departure" ? "Departure Flight" : "Return Flight"
        }`]: item.FlightID,
      });
      setData({
        ...data,
        [type === "Departure" ? "Departure Index" : "Return Index"]: index,
      });
    };
    const handleBack = () => {
      if (type === "Return") {
        navigate("/book-flights/departure-flight");
        delete data["Selected Return Flight"];
      } else {
        navigate(tripType === "One Way" ? "/book-flights/one-way" : "/book-flights/round-trip");
        delete data["Selected Departure Flight"];
      }
    };
    const handleContinue = () => {
      Object.entries(data).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
      });
      if (
        tripType === "Round Trip" &&
        location.pathname === "/book-flights/departure-flight"
      ) {
        navigate("/book-flights/return-flight");
      } else {
        console.log("Next!!");
      }
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
          <Buttons.BackButton
            text={"Back"}
            handleClick={handleBack}
          ></Buttons.BackButton>
          <Buttons.ContinueButton
            text={"Continue"}
            handleClick={handleContinue}
          ></Buttons.ContinueButton>
        </div>
      </>
    );
  };

  return (
    <Routes>
      <Route
        path="departure-flight"
        element={<AvailableFlight type="Departure" />}
      ></Route>
      <Route
        path="return-flight"
        element={<AvailableFlight type="Return" />}
      ></Route>
    </Routes>
  );
}
