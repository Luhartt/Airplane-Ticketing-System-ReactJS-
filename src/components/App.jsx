import SidebarHeader from "./sidebar-header";
import FlightsDashboard from "./FlightsDashboard";
import "./App.css";

export default function App() {
  const sampleFlight = {
    AirplaneNumber: "AB123",
    DepartureDate: "December 09, 2024",
    FlightData: {
      DepartureLocation: "ORD",
      DepartureTime: "19:00",
      ArrivalLocation: "JFK",
      ArrivalTime: "20:00",
    },
  };

  return (
    <>
      <div className="Main">
        <SidebarHeader className="SidebarHeader"></SidebarHeader>
        <section className="MainSection">
          <div className="ContentPanel">
            <FlightsDashboard></FlightsDashboard>
          </div>
        </section>
      </div>
    </>
  );
}
