import "./OneWay.css";

import ComboBox from "./ComboBox";

export default function OneWay({data, setData}) {
  const Flights = [
    "Manila",
    "Cebu",
    "Taguig",
    "Manila",
    "Cebu",
    "Taguig",
    "Manila",
    "Cebu",
    "Taguig",
  ];

  return (
    <>
      <form action="">
        <fieldset>
          <label> From </label>
          <ComboBox
            options={Flights}
            setData={setData}
            data={data}
            keyName="Departure Location"
          ></ComboBox>
          <hr />
          <label> To </label>
          <ComboBox
            options={Flights}
            setData={setData}
            data={data}
            keyName="Departure Location"
          ></ComboBox>
        </fieldset>
      </form>
    </>
  );
}
