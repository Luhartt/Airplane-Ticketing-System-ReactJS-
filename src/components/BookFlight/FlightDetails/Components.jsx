import ComboBox from "./ComboBox";
import FlightFly from "../../../Dependencies/flight_takeoff.png";
import FlightLand from "../../../Dependencies/flight_takeoff.png";
import Calendar from "../../../Dependencies/calendar_today.png";
import SuitCase from "../../../Dependencies/work.png";
import Adult from "../../../Dependencies/person.png";
import Infant from "../../../Dependencies/face.png";
import Children from "../../../Dependencies/child_care.png";
import { useData } from "../DataSetter";

const Locations = (props) => (
  <fieldset className="Locations">
    <div className="LocationsContainer">
      <p> From </p>
      <p>Ninoy Aquino International Airport (MNL)</p>
      <img src={FlightFly} alt="Takeoff" />
      <ComboBox
        options={props.options.DepartureLocations || []}
        keyName="Departure Location"
      ></ComboBox>
    </div>
    <hr />
    <div className="LocationsContainer">
      <p> To </p>
      <p>Ninoy Aquino International Airport (MNL)</p>
      <img src={FlightLand} alt="Land" />
      <ComboBox
        options={props.options.ArrivalLocations || []}
        keyName="Arrival Location"
      ></ComboBox>
    </div>
  </fieldset>
);

const DatesOneWay = (props) => (
  <fieldset className="DepartureDate">
    <p> Departure Date</p>
    <img src={Calendar} alt="Date" />
    <ComboBox
      options={props.options.DepartureDates || []}
      keyName="Departure Date"
    ></ComboBox>
  </fieldset>
);

const DatesRoundTrip = (props) => (
  <fieldset className="Dates">
    <div className="DateContainer">
      <p> Departure Date</p>
      <img src={Calendar} alt="Date" />
      <ComboBox
        options={props.options.DepartureDates || []}
        keyName="Departure Date"
      ></ComboBox>
    </div>
    <hr />
    <div className="DateContainer">
      <p> Return Date</p>
      <img src={Calendar} alt="Date" />
      <ComboBox
        options={props.options.DepartureDates || []}
        keyName="Return Date"
      ></ComboBox>
    </div>
  </fieldset>
);

const ClassSeat = (props) => (
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
      keyName="Class Seat"
    ></ComboBox>
  </fieldset>
);

function PassengerCount(props) {
  const { data, setData } = useData();

  const passengerInputs = [
    { icon: Adult, label: "Adult", id: "adultCount", keyName: "Adult"},
    { icon: Children, label: "Children (2-11 Years Old)", id: "childrenCount", keyName: "Children" },
    { icon: Infant, label: "Infant", id: "infantCount", keyName: "Infant" },
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

  return (
    <fieldset className="PassengerCount">
      <p>Companions</p>
      <div>
        {passengerInputs.map((item, index) => (
          <div key={`${item.label} ${index} container`}>
            <p key={`${item.label} ${index} label`}>{item.label}</p>
            <img
              key={`${item.label} ${index} image`}
              src={item.icon}
              alt={item.label}
            />
            <input
              onChange={(event) => handleTextInput(event, item.keyName)}
              key={`${item.label} ${index} input`}
              type="number"
              min={item.label === "Adult" ? 1 : 0}
              max={99}
              id={item.label}
              value={data[item.keyName] || (item.label === "Adult" ? 1 : 0)}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export const Components = {
  Locations,
  DatesOneWay,
  DatesRoundTrip,
  ClassSeat,
  PassengerCount,
};
