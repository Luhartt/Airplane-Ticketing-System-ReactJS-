import { useEffect } from "react";
import "./Detail.css";

export default function Detail({ totalCount, number = 0 }) {
  const Detail = ({ number }) => (
    <fieldset className={`Detail ${totalCount > 1 ? "MultipleDetails" : "SingleDetail"}`}>
      <p>Adult {number > 0 ? number : ""} Details</p>
      <label>
        First Name <br /> <input type="text" />
      </label>
      <label>
        Last Name <br />
        <input type="text" />
      </label>
      <label>
        Age <br />
        <input type="number" min={12} />
      </label>
      <label>
        Birthdate <br />
        <input type="date" />
      </label>
    </fieldset>
  );


  useEffect(() => {
    console.log(totalCount);
  }, []);
  return (
    <>
      <Detail number={1}></Detail>
    </>
  );
}
