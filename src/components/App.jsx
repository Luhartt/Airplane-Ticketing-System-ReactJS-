import SidebarHeader from "./sidebar-header";
import FlightsDashboard from "./FlightsDashboard";
import ViewBookings from "./ViewBookings";
import BookFlights from "./BookFlight/BookFlight";
import Profile from "./Profile";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [ActiveTab, setActiveTab] = useState(() => FlightsDashboard);
  const Tabs = [FlightsDashboard, BookFlights, ViewBookings, Profile];

  const handleTabChange = (component) => {
    if (typeof component === "function") {
      setActiveTab(() => component); // Correctly set component reference
    } else {
      console.error("Invalid component passed to handleTabChange:", component);
    }
  };

  return (
    <>
      <div className="Main">
        <SidebarHeader
          className="SidebarHeader"
          onTabChange={handleTabChange}
          Tabs={Tabs}
        />
        <section className="MainSection">
          <div className="ContentPanel">
            <ActiveTab></ActiveTab>
          </div>
        </section>
      </div>
    </>
  );
}
