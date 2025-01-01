import "./OneWay.css";
import ComboBox from "./ComboBox";
import Button from "../../Button";
import FlightFly from "../../../Dependencies/flight_takeoff.png";
import FlightLand from "../../../Dependencies/flight_takeoff.png";
import Calendar from "../../../Dependencies/calendar_today.png";
import SuitCase from "../../../Dependencies/work.png";
import Adult from "../../../Dependencies/person.png";
import Infant from "../../../Dependencies/face.png";
import Children from "../../../Dependencies/child_care.png";

export default function OneWay({ data, setData }) {
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

  const passengerInputs = [
    { icon: Adult, label: "Adult", id: "adultCount" },
    { icon: Children, label: "Children (2-11 Years Old)", id: "childrenCount" },
    { icon: Infant, label: "Infant", id: "infantCount" },
  ];

  const handleTextInput = (e, keyName) => {
    e.preventDefault();
    const value = parseInt(e.target.value, 10) || 0;

    if (isNaN(value)) {
      alert("Input a number");
      setData({ ...data, [keyName]: keyName === "Adult" ? 1 : 0 });
    } else {
      setData({ ...data, [keyName]: value });
    }
  };

  const test = () => {
    Object.entries(data).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  };
  return (
    <>
      <form action="">
        <fieldset className="Locations">
          <div className="LocationsContainer">
            <p> From </p>
            <p>Ninoy Aquino International Airport (MNL)</p>
            <img src={FlightFly} alt="Takeoff" />
            <ComboBox
              options={Flights}
              setData={setData}
              data={data}
              keyName="Departure Location"
            ></ComboBox>
          </div>
          <hr />
          <div className="LocationsContainer">
            <p> To </p>
            <p>Ninoy Aquino International Airport (MNL)</p>
            <img src={FlightLand} alt="Land" />
            <ComboBox
              options={Flights}
              setData={setData}
              data={data}
              keyName="Arrival Location"
            ></ComboBox>
          </div>
        </fieldset>
        <fieldset className="DepartureDate">
          <p> Departure Date</p>
          <img src={Calendar} alt="Date" />
          <ComboBox
            options={Flights}
            setData={setData}
            data={data}
            keyName="Departure Date"
          ></ComboBox>
        </fieldset>
        <fieldset className="ClassSeat">
          <p> Class Seat</p>
          <img src={SuitCase} alt="Seat Class" />
          <ComboBox
            options={[
              "Economy",
              "Business Economy",
              "Premium",
              "Premium Economy",
              "First Class",
            ]}
            setData={setData}
            data={data}
            keyName="Class Seat"
          ></ComboBox>
        </fieldset>
        <fieldset className="PassengerCount">
          {passengerInputs.map((item, index) => (
            <div key={`${item.label} ${index} container`}>
              <p key={`${item.label} ${index} label`}>{item.label}</p>
              <img
                key={`${item.label} ${index} image`}
                src={item.icon}
                alt={item.label}
              />
              <input
                onChange={(event) => handleTextInput(event, item.label)}
                key={`${item.label} ${index} input`}
                type="number"
                min={item.label === "Adult" ? 1 : 0}
                max={99}
                id={item.label}
                value={data[item.label] || (item.label === "Adult" ? 1 : 0)}
              />
            </div>
          ))}
        </fieldset>
        <Button
          text={"SEARCH FLIGHT"}
          handleClick={test}
          type={"button"}
        ></Button>
      </form>
    </>
  );
}
