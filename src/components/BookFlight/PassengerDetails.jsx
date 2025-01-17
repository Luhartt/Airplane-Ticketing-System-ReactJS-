import { Navigate, Route, Routes, useNavigate } from "react-router";
import Detail from "./PassengerDetails/Detail";
import { useData } from "./DataSetter";
import "./PassengerDetails.css";
import { Buttons } from "../Button";


export default function PassengerDetails() {
  const { data } = useData();
  const adultCount = data.Adult;
  const childrenCount = data.Children;
  const infantCount = data.Infant;
  const totalCount = adultCount + childrenCount + infantCount;
  const counts = {
    Adult: adultCount,
    Children: childrenCount,
    Infant: infantCount,
  };
  const navigate = useNavigate();
  const previous = data.Type === "Round Trip" ? "/book-flights/return-flight" : "/book-flights/departure-flight"

  const handleBack = () => {
    navigate(previous)
  }

  const handleContinue = () => {
    console.log("next!");
  }
  const PassengerDetails = ({ totalCount, counts }) => (
    <div className="PassengerDetailsContainer">
      <h1>Passenger Details</h1>
      <div
        className={`PassengerDetails ${totalCount > 1 ? "Multiple" : "Single"}`}
      >
        <Detail totalCount={totalCount} counts={counts}></Detail>
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
        element={<PassengerDetails totalCount={totalCount} counts={counts} />}
      ></Route>
    </Routes>
  );
}
