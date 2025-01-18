import { useEffect, useState } from "react";
import { useData } from "./../DataSetter";
import "./Detail.css";

export default function Detail() {
  const { data } = useData();

  const [guestData, setGuestData] = useState({});

  const counts = {
    Adult: data.Adult,
    Children: data.Children,
    Infant: data.Infant,
  };

  const updateGuestData = (key, field, value) => {
    setGuestData((prevGuestData) => ({
      ...prevGuestData,
      [key]: {
        ...prevGuestData[key],
        [field]: value,
      },
    }));
  };

  const GuestDetail = ({ number, type }) => {
    const key = `${type}${number}`;
    const currentGuestData = guestData[key] || {
      FirstName: "",
      LastName: "",
      Age: "",
      Birthdate: "",
      Discounted: false,
    };

    return (
      <fieldset
        className={`Detail ${
          Object.values(counts).reduce((sum, val) => sum + val, 0) > 1
            ? "MultipleDetails"
            : "SingleDetail"
        }`}
      >
        <p>
          {type} {number > 0 ? number : ""} Details
        </p>
        <label htmlFor={`${key}-firstName`}>
          First Name <br />
          <input
            id={`${key}-firstName`}
            type="text"
            value={currentGuestData.FirstName}
            onChange={(e) => updateGuestData(key, "FirstName", e.target.value)}
          />
        </label>

        <label htmlFor={`${key}-lastName`}>
          Last Name <br />
          <input
            id={`${key}-lastName`}
            type="text"
            value={currentGuestData.LastName}
            onChange={(e) => updateGuestData(key, "LastName", e.target.value)}
          />
        </label>

        <label htmlFor={`${key}-age`}>
          Age <br />
          <input
            id={`${key}-age`}
            type="number"
            value={currentGuestData.Age}
            onChange={(e) => updateGuestData(key, "Age", e.target.value)}
          />
        </label>

        <label htmlFor={`${key}-birthdate`}>
          Birthdate <br />
          <input
            id={`${key}-birthdate`}
            type="date"
            value={currentGuestData.Birthdate}
            onChange={(e) => updateGuestData(key, "Birthdate", e.target.value)}
          />
        </label>

        <label
          className={`check ${type !== "Adult" && "non-adult"}`}
          htmlFor={`${key}-discounted`}
        >
          <input
            id={`${key}-discounted`}
            type="checkbox"
            checked={currentGuestData.Discounted}
            onChange={(e) =>
              updateGuestData(key, "Discounted", e.target.checked)
            }
          />
          I am Senior or a PWD
        </label>
      </fieldset>
    );
  };

  useEffect(() => {
    console.log(guestData);
  }, [guestData]);

  return (
    <>
      {Object.entries(counts).map(([type, count]) =>
        [...Array(count)].map((_, index) => (
          <GuestDetail
            key={`${type}-${index}`}
            number={index + 1}
            type={type}
          />
        ))
      )}
    </>
  );
}
