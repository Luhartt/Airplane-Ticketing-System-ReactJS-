import { useEffect } from "react";
import "./Detail.css";

export default function Detail({ totalCount, number = 0 }) {
  const SingleDetail = ({ number }) => (
    <fieldset className="Detail">
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
        <input type="number" min = {12}/>
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
  return <>{totalCount === 1 ? <SingleDetail number={number}/> : <p> Loading </p>}</>;
}
