import { Route, Routes, useNavigate } from "react-router";
import GuestDetail from "./PassengerDetails/Detail";
import { useData } from "./DataSetter";
import "./PassengerDetails.css";
import { Buttons } from "../Button";

const PassengerDetailsContent = ({ totalCount, counts }) => {
  const { data } = useData();
  const navigate = useNavigate();

  const validateAndContinue = () => {
    const guestEntries = Object.entries(data).filter(
      ([key]) =>
        key.includes("Adult") ||
        key.includes("Children") ||
        key.includes("Infant") ||
        key.includes("Passenger")
    );

    const hasEmptyFields = guestEntries.some(([_, guestData]) => {
      if (!guestData) return true;

      return (
        !guestData.FirstName?.trim() ||
        !guestData.LastName?.trim() ||
        !guestData.Age?.toString()?.trim() ||
        !guestData.Birthdate?.trim()
      );
    });

    if (hasEmptyFields) {
      alert("Please fill in all required fields for all passengers");
      return;
    }
    console.log(data);
    navigate("/book-flights/addons");
  };

  const previous =
    data.Type === "Round Trip"
      ? "/book-flights/return-flight"
      : "/book-flights/departure-flight";

  const handleBack = () => {
    navigate(previous);
  };

  return (
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
          handleClick={validateAndContinue}
        ></Buttons.ContinueButton>
      </div>
    </div>
  );
};

export default function PassengerDetails() {
  const { data } = useData();

  const PassengerCounts = {
    ...(data.adultCount !== undefined &&
      data.adultCount !== 0 && { Adult: data.adultCount }),
    ...(data.childrenCount !== undefined &&
      data.childrenCount !== 0 && { Children: data.childrenCount }),
    ...(data.infantCount !== undefined &&
      data.infantCount !== 0 && { Infant: data.infantCount }),
  };
  return (
    <Routes>
      <Route
        path="passenger-details"
        element={
          <PassengerDetailsContent
            counts={PassengerCounts}
            totalCount={Object.values(PassengerCounts).reduce(
              (a, b) => a + b,
              0
            )}
          />
        }
      ></Route>
    </Routes>
  );
}
