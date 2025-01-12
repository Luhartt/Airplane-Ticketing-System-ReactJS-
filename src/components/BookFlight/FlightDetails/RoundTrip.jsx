import { Buttons } from "../../Button";
import "./RoundTrip.css";

import { Components } from "./Components";

export default function RoundTrip({ data, setData, handleSubmit }) {
  return (
    <>
      <form action="" className="RoundTripForm">
        <>
          <Components.Locations options={[]}></Components.Locations>
          <Components.DatesRoundTrip options={[]}></Components.DatesRoundTrip>
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
