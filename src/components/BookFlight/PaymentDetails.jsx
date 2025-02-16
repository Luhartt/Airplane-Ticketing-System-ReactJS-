import { Routes, Route, useNavigate } from "react-router-dom";
import { transformFlight } from "../../Dependencies/getFlight";
import Flight from "../Flight";
import { Buttons } from "../Button";
import "./PaymentDetails.css";

const data = {
  Type: "Round Trip",
  SelectedDepartureFlightPrice: 2500,
  SelectedReturnFlightPrice: 2500,
  adultCount: 2,
  childrenCount: 1,
  infantCount: 0,
  SelectedAddonIndex: [0, 1],
  "Class Seat": "Economy",
  "Adult 1": {
    FirstName: "John",
    LastName: "Doe",
    Age: "24",
    Birthdate: "1997-01-01",
    Discounted: true,
  },
  "Adult 2": {
    FirstName: "John",
    LastName: "Doe",
    Age: "24",
    Birthdate: "1997-01-01",
  },
  "Children 1": {
    FirstName: "Jane",
    LastName: "Doe",
    Age: "7",
    Birthdate: "2014-01-01",
  },
};

const sampleDepartureFlight = {
  BookingDate: "2021-08-01",
  ReferenceNo: "123456",
  AirplaneNumber: "123",
  DepartureDate: "2021-08-01T08:00:00",
  Type: "Departure",
  DepartureAirportCode: "MNL",
  ArrivalAirportCode: "CEB",
  ArrivalDate: "2021-08-01T10:00:00",
};

const sampleReturnFlight = {
  BookingDate: "2021-08-01",
  ReferenceNo: "123456",
  AirplaneNumber: "123",
  DepartureDate: "2021-08-01T08:00:00",
  Type: "Return",
  DepartureAirportCode: "CEB",
  ArrivalAirportCode: "MNL",
  ArrivalDate: "2021-08-01T10:00:00",
};

const calculateTotalPrice = (acquiredData, flightPrice) => {
  if (!acquiredData || !flightPrice) return null;

  let seatMultiplier = 1;
  switch (acquiredData["Class Seat"]) {
    case "Business Economy":
      seatMultiplier = 1.5;
      break;
    case "Premium":
      seatMultiplier = 2;
      break;
    case "Premium Economy":
      seatMultiplier = 2.5;
      break;
    case "First Class":
      seatMultiplier = 3;
      break;
    default:
      seatMultiplier = 1;
  }

  const costs = {
    adultSubtotal: 0,
    childrenSubtotal: 0,
    infantSubtotal: 0,
  };

  // Calculate adult costs
  for (let i = 1; i <= acquiredData.adultCount; i++) {
    const adult = acquiredData[`Adult ${i}`];
    if (adult) {
      const discounted = adult.Discounted || false;
      costs.adultSubtotal += CalculatePrice(
        discounted,
        1,
        seatMultiplier,
        flightPrice
      );
    }
  }

  // Calculate children costs
  for (let i = 1; i <= acquiredData.childrenCount; i++) {
    const child = acquiredData[`Children ${i}`];
    if (child) {
      costs.childrenSubtotal += CalculatePrice(
        false,
        0.7,
        seatMultiplier,
        flightPrice
      );
    }
  }

  // Calculate infant costs
  for (let i = 1; i <= acquiredData.infantCount; i++) {
    const infant = acquiredData[`Infant ${i}`];
    if (infant) {
      costs.infantSubtotal += CalculatePrice(
        false,
        0.5,
        seatMultiplier,
        flightPrice
      );
    }
  }

  return costs;
};

const CalculatePrice = (
  Discounted,
  typeMultiplier,
  seatMultiplier,
  flightPrice
) => {
  const basePrice = flightPrice * typeMultiplier * seatMultiplier;

  if (Discounted) {
    const discount = basePrice * 0.2;
    return basePrice - discount;
  } else {
    const tax = basePrice * 0.12;
    return basePrice + tax;
  }
};

const Details = ({ data, costs, flight }) => {
  if (!data || !costs || !flight) {
    return <div>Loading...</div>;
  }

  const counts = [
    {
      type: "Adult",
      count: data.adultCount,
      costs: costs.adultSubtotal,
    },
    {
      type: "Children",
      count: data.childrenCount,
      costs: costs.childrenSubtotal,
    },
    {
      type: "Infant",
      count: data.infantCount,
      costs: costs.infantSubtotal,
    },
  ];

  return (
    <section className="payment-details">
      <Flight FlightData={flight.FlightData} />
      <p className="seat-class">Seat Class: {data["Class Seat"]}</p>
      <p className="plane-number">Plane Number: {flight.AirplaneNumber}</p>
      <div className="passengers">
        {counts.map(
          (count, index) =>
            count.count > 0 && (
              <div key={index} className="passenger">
                <p>
                  {count.type}: {count.count}
                </p>
                <p>${count.costs.toFixed(2)}</p>
              </div>
            )
        )}
      </div>

      <div className="subtotal-container">
        <p className="subtotal">Subtotal</p>
        <p className="subtotal-price">
          $
          {Object.values(costs)
            .reduce((acc, curr) => acc + curr, 0)
            .toFixed(2)}
        </p>
      </div>
      <button>View</button>
    </section>
  );
};

const PaymentDetailsContents = () => {
  const departureCosts = calculateTotalPrice(
    data,
    data.SelectedDepartureFlightPrice
  );

  const navigate = useNavigate();
  const SelectedAddons = data.SelectedAddonIndex.sort();
  const Addons = {
    0: ["Food", 1000],
    1: ["Baggage", 2000],
    2: ["Transport", 3000],
  };

  const departureFlight = transformFlight(sampleDepartureFlight);

  const returnCosts =
    data.Type === "Round Trip"
      ? calculateTotalPrice(data, data.SelectedReturnFlightPrice)
      : null;
  const returnFlight =
    data.Type === "Round Trip" ? transformFlight(sampleReturnFlight) : null;

  if (!departureFlight || !departureCosts) {
    return <div>Error loading flight details</div>;
  }

  const handleContinue = () => {
    console.log("Continue");
  };

  const handleBack = () => {
    navigate("/book-flights/addons");
  };

  return (
    <div className="payment-details-container">
      <h1>Payment</h1>
      <main>
        <Details data={data} flight={departureFlight} costs={departureCosts} />
        {data.Type === "Round Trip" && returnFlight && returnCosts && (
          <>
            <hr />
            <Details data={data} flight={returnFlight} costs={returnCosts} />
          </>
        )}
        {data.SelectedAddonIndex.length > 0 && (
          <div className="addons">
            <p className="addons-title">Addons</p>
            {SelectedAddons.map((item, index) => (
              <div className="addon">
                <p>{Addons[item][0]}</p>
                <p>{Addons[item][1]}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <div className="Buttons">
        <Buttons.BackButton
          text={"Back"}
          handleClick={handleBack}
        ></Buttons.BackButton>
        <Buttons.ContinueButton
          text={"Continue"}
          handleClick={handleContinue}
        ></Buttons.ContinueButton>
      </div>
    </div>
  );
};

export default function PaymentDetails() {
  return (
    <Routes>
      <Route path="payment-details" element={<PaymentDetailsContents />} />
    </Routes>
  );
}
