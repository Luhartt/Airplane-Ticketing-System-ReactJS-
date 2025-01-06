import "./OneWay.css";
import ComboBox from "./ComboBox";
import Button from "../../Button";
import FlightFly from "../../../Dependencies/flight_takeoff.png";
import FlightLand from "../../../Dependencies/flight_takeoff.png";
import Calendar from "../../../Dependencies/calendar_today.png";
import SuitCase from "../../../Dependencies/work.png";
import Adult from "../../../Dependencies/person.png";
import Infant from "../../../Dependencies/face.png";
import Children from "../../../Dependencies/child_care.png";
import { Components } from "./Components";

export default function OneWay({ data, setData }) {
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

  const test = () => {
    Object.entries(data).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  };
  return (
    <>
      <form action="">
        <Components.Locations
          options={options}
          data={data}
          setData={setData}
        ></Components.Locations>

        <Components.DatesOneWay
          options={options}
          data={data}
          setData={setData}
        ></Components.DatesOneWay>

        <Components.ClassSeat
          data={data}
          setData={setData}
        ></Components.ClassSeat>

        <Components.PassengerCount
          data={data}
          setData={setData}
        ></Components.PassengerCount>

        <Button
          text={"SEARCH FLIGHT"}
          handleClick={test}
          type={"button"}
        ></Button>
      </form>
    </>
  );
}
