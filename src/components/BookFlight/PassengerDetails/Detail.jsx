import { useEffect } from "react";
import "./Detail.css";

export default function Detail({ totalCount, counts }) {
  const countPerType = counts;

  const Detail = ({ number, type }) => {
    return (
      <fieldset
        className={`Detail ${
          totalCount > 1 ? "MultipleDetails" : "SingleDetail"
        }`}
      >
        <p>
          {type} {number > 0 ? number : ""} Details
        </p>
        <label>
          First Name <br />
          <input type="text" />
        </label>
        <label>
          Last Name <br />
          <input type="text" />
        </label>
        <label>
          Age <br />
          <input type="number" />
        </label>
        <label>
          Birthdate <br />
          <input type="date" />
        </label>
        <label className={`check ${type!=="Adult" && "non-adult"}`}>
          <input type="checkbox" />I am Senior or a PWD
        </label>
      </fieldset>
    );
  };

  useEffect(() => {
    console.log(countPerType);
  }, [countPerType]);

  return (
    <>
      {Object.entries(countPerType).map(
        ([type, count]) =>
          count > 0 &&
          [...Array(count)].map((_, subIndex) => (
            <Detail
              key={`${type}-${subIndex}`}
              number={subIndex + 1}
              type={type}
            />
          ))
      )}
    </>
  );
}
