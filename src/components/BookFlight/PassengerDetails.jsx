import { Route, Routes, useNavigate } from "react-router";
import GuestDetail from "./PassengerDetails/Detail";
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

  const counts = {};
  if (data.Adult !== undefined) {
    counts.Adult = data.Adult;
  }
  if (data.Children !== undefined) {
    counts.Children = data.Children;
  }
  if (data.Infant !== undefined) {
    counts.Infant = data.Infant;
  }

  console.log(counts);

  const PassengerDetails = ({ totalCount }) => (
    <div className="PassengerDetailsContainer">
      <h1>Passenger Details</h1>
      <div
        className={`PassengerDetails ${totalCount > 1 ? "Multiple" : "Single"}`}
      >
        {Object.entries(counts).map(([type, count]) =>
          [...Array(count)].map((_, index) => (
            <GuestDetail
              key={`${type}-${index}`}
              number={totalCount > 1 ? index + 1 : 0}
              type={totalCount > 1 ? type : "Passenger"}
              counts={counts}
            />
          ))
        )}
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
        element={
          <PassengerDetails
            totalCount={Object.values(counts).reduce((a, b) => a + b, 0)}
          />
        }
      ></Route>
    </Routes>
  );
}
