import { Buttons } from "../../Button";
import "./RoundTrip.css";

import { Components } from "./Components";

export default function RoundTrip({ handleSubmit }) {

  const options = {
    DepartureLocations: [
      "Manila",
      "Cebu",
      "Taguig",
      "Manila",
      "Cebu",
      "Taguig",
      "Manila",
      "Cebu",
      "Taguig",
    ],
    ArrivalLocations: [
      "Manila",
      "Cebu",
      "Taguig",
      "Manila",
      "Cebu",
      "Taguig",
      "Manila",
      "Cebu",
      "Taguig",
    ],
    DepartureDates: ["1", "2", "3", "4"],
    ReturnDates: ["1", "2", "3", "4"]
  };


  return (
    <>
      <form action="" className="RoundTripForm">
        <>
          <Components.Locations options={options}></Components.Locations>
          <Components.DatesRoundTrip options={options}></Components.DatesRoundTrip>
          <Components.ClassSeat></Components.ClassSeat>
          <Components.PassengerCount></Components.PassengerCount>
        </>
        <Buttons.ContinueButton
          text={"SEARCH FLIGHT"}
          handleClick={() => handleSubmit("RoundTrip")}
          type={"button"}
        ></Buttons.ContinueButton>
      </form>
    </>
  );
}
