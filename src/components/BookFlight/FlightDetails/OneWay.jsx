import "./OneWay.css";
import {Buttons} from "../../Button";
import { Components } from "./Components";

export default function OneWay({ handleSubmit }) {
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
  };

  return (
    <>
      <form action="" className="OneWayForm">
        <Components.Locations options={options}></Components.Locations>
        <Components.DatesOneWay options={options}></Components.DatesOneWay>
        <Components.ClassSeat></Components.ClassSeat>
        <Components.PassengerCount></Components.PassengerCount>
        <Buttons.ContinueButton
          text={"SEARCH FLIGHT"}
          handleClick={() => handleSubmit("OneWay")}
          type={"button"}
        ></Buttons.ContinueButton>
      </form>
    </>
  );
}
