import { useData } from "../DataSetter";
import { useState, useEffect } from "react";
import "./Detail.css";

export default function GuestDetail({ type, number, counts }) {
  const { setData } = useData();
  const [guestData, setGuestData] = useState({});

  useEffect(() => {
    let key = `${type} ${number}`;
    key = key === "Passenger 0" ? "Adult 1" : key;

    if (Object.keys(guestData).length > 0) {
      setData((prevData) => ({
        ...prevData,
        [key]: guestData[`${type}${number}`],
      }));
    }
  }, [guestData, type, number, setData]);

  const updateGuestData = (key, field, value) => {
    setGuestData((prevGuestData) => ({
      ...prevGuestData,
      [key]: {
        ...prevGuestData[key],
        [field]: value,
      },
    }));
  };

  const key = `${type}${number}`;
  const currentGuestData = guestData[key] || {
    FirstName: "",
    LastName: "",
    Age: "",
    Birthdate: "",
    Discounted: false,
  };

  return (
    <>
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
            defaultValue={currentGuestData.FirstName}
            onChange={(e) => updateGuestData(key, "FirstName", e.target.value)}
          />
        </label>

        <label htmlFor={`${key}-lastName`}>
          Last Name <br />
          <input
            id={`${key}-lastName`}
            type="text"
            defaultValue={currentGuestData.LastName}
            onChange={(e) => updateGuestData(key, "LastName", e.target.value)}
          />
        </label>

        <label htmlFor={`${key}-birthdate`}>
          Birthdate <br />
          <input
            id={`${key}-birthdate`}
            type="date"
            defaultValue={currentGuestData.Birthdate}
            onChange={(e) => updateGuestData(key, "Birthdate", e.target.value)}
          />
        </label>

        <label htmlFor={`${key}-age`}>
          Age <br />
          <input
            id={`${key}-age`}
            type="number"
            defaultValue={currentGuestData.Age}
            onChange={(e) => updateGuestData(key, "Age", e.target.value)}
          />
        </label>

        <label
          className={`check ${type !== "Adult" && "non-adult"}`}
          htmlFor={`${key}-discounted`}
        >
          <input
            id={`${key}-discounted`}
            type="checkbox"
            defaultChecked={currentGuestData.Discounted}
            onChange={(e) =>
              updateGuestData(key, "Discounted", e.target.checked)
            }
          />
          I am Senior or a PWD
        </label>
      </fieldset>
    </>
  );
}
