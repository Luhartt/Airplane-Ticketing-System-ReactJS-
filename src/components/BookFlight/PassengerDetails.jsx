import { Route, Routes, useNavigate } from "react-router";
import Details from "./PassengerDetails/Detail";
import { useData } from "./DataSetter";
import "./PassengerDetails.css";
import { Buttons } from "../Button";

export default function PassengerDetails() {
  const { data } = useData();
  const navigate = useNavigate();
  const previous =
    data.Type === "Round Trip"
      ? "/book-flights/return-flight"
      : "/book-flights/departure-flight";

  const handleBack = () => {
    navigate(previous);
  };

  const handleContinue = () => {
    console.log(data);
  };
  const PassengerDetails = ({ totalCount, counts }) => (
    <div className="PassengerDetailsContainer">
      <h1>Passenger Details</h1>
      <div
        className={`PassengerDetails ${totalCount > 1 ? "Multiple" : "Single"}`}
      >
        <Details></Details>
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
    </div>
  );

  return (
    <Routes>
      <Route
        path="passenger-details"
        element={<PassengerDetails />}
      ></Route>
    </Routes>
  );
}
