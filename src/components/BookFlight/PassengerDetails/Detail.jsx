import { useData } from "../DataSetter";
import { useState, useEffect } from "react";
import "./Detail.css";

export default function GuestDetail({ type, number, counts }) {
  const { setData } = useData();
  const [guestData, setGuestData] = useState({});

  const calculateAge = (birthdate) => {
    if (!birthdate) return "";
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();


    if (birthDate > today) {
      alert("Birthdate cannot be a future date");
      return -1;
    }

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const updateGuestData = (key, field, value) => {
    if (field === "Birthdate") {
      const age = calculateAge(value);
      if(age === -1){
        return
      }
      if ((type === "Adult" || type === "Passenger") && age < 18) {
        alert("Adult passengers must be 18 years or older");
        return;
      }
      if (type === "Children" && (age < 2 || age > 11)) {
        alert("Children passengers must be between 2-11 years old");
        return;
      }
      if (type === "Infant" && (age < 0 || age > 1)) {
        alert("Infant passengers must be under 2 years old");
        return;
      }

      setGuestData((prevGuestData) => ({
        ...prevGuestData,
        [key]: {
          ...prevGuestData[key],
          [field]: value,
          Age: age.toString(),
        },
      }));
    } else {
      setGuestData((prevGuestData) => ({
        ...prevGuestData,
        [key]: {
          ...prevGuestData[key],
          [field]: value,
        },
      }));
    }
  };

  useEffect(() => {
    const key = `${type} ${number}`;
    if (Object.keys(guestData).length > 0) {
      setData((prevData) => ({
        ...prevData,
        [key]: guestData[`${type}${number}`],
      }));
    }
  }, [guestData, type, number, setData]);

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
            value={currentGuestData.Birthdate || ""}
            onChange={(e) => updateGuestData(key, "Birthdate", e.target.value)}
          />
        </label>
        <label htmlFor={`${key}-age`}>
          Age <br />
          <input
            id={`${key}-age`}
            type="text"
            placeholder="Input Birthdate"
            defaultValue={currentGuestData.Age}
            readOnly
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
